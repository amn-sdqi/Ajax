const loadComments = document.getElementById("load-comments");
const commentsSec = document.getElementById("comments");

function creatCommentsList(comments) {
	const commentListElement = document.createElement("ol");

	for (const comment of comments) {
		const commentEle = document.createElement("li");
		commentEle.innerHTML = `<article class="comment-item"><h2>${comment.title}</h2> <p> ${comment.text}</p> </article>`;
		commentListElement.appendChild(commentEle);
	}

	return commentListElement;
}

async function fetchComments() {
	const postid = loadComments.dataset.postid;
	const response = await fetch(`/posts/${postid}/comments`);
	const responseData = await response.json();

	console.log(responseData);
	const commentListElement = creatCommentsList(responseData);

	commentsSec.innerHTML = "";
	commentsSec.appendChild(commentListElement);
}

loadComments.addEventListener("click", fetchComments);
