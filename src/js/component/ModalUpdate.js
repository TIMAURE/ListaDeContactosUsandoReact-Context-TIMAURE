import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalUpdate = props => {
	const [name, setName] = useState(props.name);
	const [email, setEmail] = useState(props.email);
	const [phone, setPhone] = useState(props.phone);
	const [address, setAddress] = useState(props.address);
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		setName(props.name);
		setEmail(props.email);
		setPhone(props.phone);
		setAddress(props.address);
	}, [props]);

	const handleUpdate = () => {
		const data = {
			name: name,
			email: email,
			agenda_slug: "TIMAURE",
			phone: phone,
			address: address
		};
		actions.updateOneContact(props.id, data);
		props.onClose();
	};
	console.log(name);
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						{}
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								value={name}
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								value={email}
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								value={phone}
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								value={address}
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
							/>
						</div>
						{/* </form> */}
					</div>
					<div className="modal-footer">
						<button
							onClick={() => {
								props.onClose();
							}}
							type="button"
							className="btn btn-primary">
							Oh no!
						</button>
						<button
							onClick={() => {
								handleUpdate();
								props.onClose();
							}}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalUpdate.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string
};

ModalUpdate.defaultProps = {
	show: false,
	onClose: null
};