module.exports = ({ personalDetails,education,experience,skills }) => {
   let educationHtml = '';
   let experienceHtml = '';
   let skillsHtml = ''; 
   const prepareHtml = () => {
      education.forEach((item) => {
         educationHtml += `<table>
         <tr>
             <td>Institute:</td>
             <td>${`${item.institute}`}</td>
         </tr>
         <tr>
             <td>Degree:</td>
             <td>${`${item.degree}`}</td>
         </tr>
         <tr>
             <td>From:</td>
             <td>${`${item.from}`}</td>
         </tr>
         <tr>
             <td>To:</td>
             <td>${`${item.to}`}</td>
         </tr>
     </table>
     <br/>`
      });

      experience.forEach(item => {
         experienceHtml += `<table>
         <tr>
             <td>Company:</td>
             <td>${`${item.company}`}</td>
         </tr>
         <tr>
         <td>Role:</td>
         <td>${`${item.role}`}</td>
         </tr>
         <tr>
         <td>From:</td>
         <td>${`${item.from}`}</td>
         </tr>
         <tr>
         <td>To:</td>
         <td>${`${item.to}`}</td>
         </tr>
     </table>
     <br/>`
      });

      skills.forEach(item => {
         skillsHtml += `<li>${`${item}`}</li>`
      })
    }
    prepareHtml();
return `
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Resume</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			margin: 0;
			padding: 0;
		}

		.header {
			background-color: #333;
			color: white;
			padding: 20px;
			text-align: center;
		}

		.section {
			margin-top: 20px;
			margin-bottom: 20px;
            padding:10px 20px;
		}

		table {
			border-collapse: collapse;
			width: 100%;
		}

		th, td {
			padding: 10px;
			text-align: left;
			border-bottom: 1px solid #ddd;
		}

		th {
			background-color: #f2f2f2;
			font-weight: bold;
		}

		.personal-details {
			margin-top: 20px;
			margin-bottom: 20px;
            padding:10px 20px;
		}

		h1 {
			margin-top: 0;
		}

		.skills {
			margin-top: 20px;
			margin-bottom: 20px;
            padding:10px 20px;
		}

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		ul li {
			display: inline-block;
			margin-right: 10px;
			background-color: #f2f2f2;
			padding: 5px 10px;
			border-radius: 5px;
		}
	</style>
</head>
<body>
	<div class="header">
		<h1>${personalDetails.firstName} ${personalDetails.lastName}</h1>
	</div>

	<div class="personal-details">
		<table>
			<thead>
				<tr>
					<th colspan="2">Personal Details</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>First Name:</td>
					<td>${personalDetails.firstName}</td>
				</tr>
				<tr>
					<td>Last Name:</td>
					<td>${personalDetails.lastName}</td>
				</tr>
				<tr>
					<td>Date of Birth:</td>
					<td>${personalDetails.dob}</td>
				</tr>
				<tr>
					<td>Gender:</td>
					<td>${personalDetails.gender}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="section">
		<table>
			<thead>
				<tr>
					<th colspan="2">Education</th>
				</tr>
			</thead>
            <tr>
			${educationHtml}
            </tr>
		</table>
	</div>

	<div class="section">
		<table>
			<thead>
				<tr>
					<th colspan="2">Experience</th>
				</tr>
			</thead>
            <tr>
			${experienceHtml}
            </tr>
        </table>
    </div>
    <div class="skills">
        <h2>Skills</h2>
        <ul>
            ${skillsHtml}
        </ul>
    </div>
    </body>
    </html>                

    `;
};