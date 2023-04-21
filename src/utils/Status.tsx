import { FC } from "react";
import { useLanyard } from "react-use-lanyard";

const Status: FC = () => {
	const { loading, status } = useLanyard({
		userId: "694604709591384226",
		socket: true,
	});

	const getColor = () => {
		switch (status?.discord_status) {
			case "online":
				return {
					status: "online",
					color: "text-green-600",
				};
			case "idle":
				return {
					status: "idle",
					color: "text-yellow-700",
				};
			case "dnd":
				return {
					status: "busy",
					color: "text-red-700",
				};
			default:
				return {
					status: "offline",
					color: "text-grey-500",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline") {
			return "offline";
		}

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return getColor().status;
		switch (filtered.name) {
			case "Spotify":
				return getColor().status + "and Listening to " + filtered.details;
			case "Code":
				return "coding in Visual Studio Code";
			case "Call of Duty®: Modern Warfare® II":
				return getColor().status + " and Playing Modern Warfare II";
			default:
				if (filtered.name)
					return `${getColor().status} and Playing ${filtered.name}`;
		}
	};
	return (
		// @ts-ignore
		<span className={getColor().color}>
			{getStatus()[0].toLowerCase() + getStatus()?.substring(1)}
		</span>
	);
};

export default Status;
