import {useState} from "react";

function TheForm() {
	const [title, setTitle] = useState("");
	const [articles, setArticles] = useState([]);

	function handleTitleChange(event) {
		setTitle(event.target.value);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		if (title) {
			setArticles([
				...articles,
				{
					id: crypto.randomUUID(),
					title,
				},
			]);
		}
	}

	function handleDelete(id) {
		const newArticles = articles.filter((article) => article.id !== id);
		setArticles(newArticles);
	}

	return (
		<div>
			<form
				onSubmit={handleFormSubmit}
				className="flex items-center justify-center mt-10">
				<label className="mr-5 text-white" htmlFor="title">
					Titolo:{" "}
				</label>
				<input
					className="border rounded-md px-2 py-1"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={handleTitleChange}
				/>
			</form>

			{/* print a list of titles */}
			<div className="flex justify-center mt-5">
				<div className="w-full max-w-2xl">
					{articles.map((article) => (
						<div
							className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-md mb-2"
							key={article.id}>
							<span className="text-white text-left">{article.title}</span>
							<button
								className="px-3 py-1 bg-red-800 text-slate-200 rounded-md transition duration-200 ease-in-out hover:bg-red-600 hover:text-white"
								onClick={() => handleDelete(article.id)}>
								<i className="fa-solid fa-trash-can"></i> Cancella
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default TheForm;
