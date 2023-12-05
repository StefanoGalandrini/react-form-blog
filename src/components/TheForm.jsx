import {useState} from "react";

function TheForm() {
	const initialData = {
		title: "",
		author: "",
		published: false,
	};

	// const [title, setTitle] = useState("");
	const [articles, setArticles] = useState([]);
	const [articleData, setArticleData] = useState(initialData);

	// function handleTitleChange(event) {
	// 	setTitle(event.target.value);
	// }
	function handleChange(event) {
		const {name, value, type, checked} = event.target;
		setArticleData({
			...articleData,
			[name]: type === "checkbox" ? checked : value,
		});
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		if (articleData.title && articleData.author) {
			setArticles([...articles, {...articleData, id: crypto.randomUUID()}]);
			setArticleData(initialData);
		}
	}

	function handleDelete(id) {
		const updatedArticles = articles.filter((article) => article.id !== id);
		setArticles(updatedArticles);
	}

	return (
		<div>
			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col items-center justify-center mt-10 space-y-4">
				<div className="flex items-center space-x-2">
					<label className="text-white" htmlFor="title">
						Titolo:
					</label>
					<input
						className="border rounded-md px-2 py-1"
						type="text"
						name="title"
						id="title"
						value={articleData.title}
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center space-x-2">
					<label className="text-white" htmlFor="author">
						Autore:
					</label>
					<input
						className="border rounded-md px-2 py-1"
						type="text"
						name="author"
						id="author"
						value={articleData.author}
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center space-x-2">
					<label className="text-white" htmlFor="published">
						Pubblicato:
					</label>
					<input
						type="checkbox"
						name="published"
						id="published"
						checked={articleData.published}
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					className="mb-16 bg-purple-800 text-slate-200 px-4 py-2 rounded transition delay-150 hover:bg-purple-600 hover:text-white">
					Aggiungi
				</button>
			</form>

			{/* print a list of titles */}
			<div className="flex justify-center mt-5 text-zinc-300">
				<div className="w-full max-w-2xl">
					{articles.length > 0 && (
						<div className="grid grid-cols-4 gap-4 text-white mb-2">
							<div className="text-left font-bold">Titolo</div>
							<div className="text-left font-bold">Autore</div>
							<div className="text-left font-bold">Pubblicato</div>
							<div></div>
						</div>
					)}
					{articles.map((article) => (
						<div
							className="grid grid-cols-4 gap-4 bg-gray-800 px-4 py-2 rounded-md mb-2"
							key={article.id}>
							<div className="text-left">{article.title}</div>
							<div className="text-left">{article.author}</div>
							<div className="text-left">{article.published ? "Sì" : "No"}</div>
							<div>
								<button
									className="px-3 py-1 bg-red-800 text-slate-200 rounded-md transition duration-200 ease-in-out hover:bg-red-600 hover:text-white"
									onClick={() => handleDelete(article.id)}>
									<i className="fa-solid fa-trash-can"></i> Cancella
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default TheForm;
