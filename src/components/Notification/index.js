import React from "react";
import "./notification.scss"
import { RiCloseLine } from "react-icons/ri";
import { MdError } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import clsx from "clsx";
import { useEffect } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";

function Notification({ message, isSuccess, isHidden }) {
	const { setIsHidden } = React.useContext(NotificationContext)

	return (
		<div className={clsx("notification", { "--hidden": isHidden })}>
			{
				isSuccess ? <BsFillCheckCircleFill className="status-icon --success" />
					: <MdError className="status-icon --error" />
			}
			<span className="message">{message}</span>
			<RiCloseLine className="close-icon-btn" onClick={() => setIsHidden(true)} />
		</div>
	)
}

export default Notification