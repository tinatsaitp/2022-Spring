const job_search = document.getElementById('job_search');

job_search.addEventListener('click', getFilterJob);

function getFilterJob() {
	const query = `
		query ($searchingJobs: String) {
			jobs (searchingJobs: $searchingJobs) {
				title,
				company: company{name, websiteUrl, logoUrl},
        		commitment: commitment{title},
        		remotes: remotes{name},
				countries: countries {name},
        		locationNames,
				description,
				applyUrl,
				postedAt
			}
		}	
	`;

	fetch("https://api.graphql.jobs/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			query,
			variables: {
				searchingJobs: $("#jobtype")
			}
		})
	}).then(response => {
		return response.json();
	}).then(data => {
		console.log(data);
	});
}