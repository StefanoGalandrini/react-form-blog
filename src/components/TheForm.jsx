import {useState} from "react";

function TheForm() {
	const [title, setTitle] = useState("");

	function handleTitleChange(event) {
		setTitle(event.target.value);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(title);
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="title">Titolo: </label>
			<input
				type="text"
				name="title"
				id="title"
				value={title}
				onChange={handleTitleChange}
			/>
		</form>
	);
}

export default TheForm;
