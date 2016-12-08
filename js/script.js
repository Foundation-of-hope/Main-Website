// an array of history data
var hist = [
	{
		year: 'Today',
		content: "Today, the Foundation of Hope continues to promote the principles of uplifting and offering hope to our community members and campaigning for the betterment of our local community.",
		image: '../img/1984.jpg'
	},
	{
		year: '2016',
		content: "In June 2016, the Foundation of Hope partners with Optimus Health Care a private non-profit organization operating as accredited community health centers in southwestern Connecticut. Performing series of free community health fairs. In October 2016, we began partnership with the United States Byrne Criminal Justice Program to to reinvest in the South Norwalk community as they target hot spots with social issues and employ data driven strategies to reduce crime, promote education, financial literacy, public safety and health.",
		image: '../img/1984.jpg'
	},
	{
		year: '2015',
		content: "In August 2015, the Foundation of Hope has “Save The Children Gala”In October 2015, the Foundation of Hope has it’s first Save The Children Walk down Greenwich Avenue in Greenwich, CT.",
		image: '../img/1984.jpg'
	},
	{
		year: '2014',
		content: "In July 2014, Established the Foundation of Hope and mission to collaborate and partnership with regional and national charities to help bring local awareness to humanitarian campaigns. In January 2014, the Foundation of Hope’s Operation Smile Fundraiser Masquerade BallIn July 2014, due to the amount of services provided to people of different cultures and nationalities in need of help, the Haitian Community Center becomes the Hope Community center and is parented by the Foundation of Hope.",
		image: '../img/1984.jpg'
	},
	{
		year: '2013',
		content: "In January 2013, Rebecca Prosper initiates collaboration with non-profit organization Operation Smile to campaign and fundraise to provide cleft lip and palate repair surgeries to children - This marked the start of the Foundation of Hope",
		image: '../img/1984.jpg'
	},
	{
		year: '2002-2004',
		content: "In 2002 Through grants from SCDC (Stamford Cultural Development Corporation) offers a visual and performing program" + '</br>' + "In 2003, partnered with the Boy Scouts of America to integrate Troup 1804" + '</br>' + "In 2004, the Center also partnered with Girls Scout of America",
		image: '../img/1984.jpg'
	},
	{
		year: '2001',
		content: "In 2001, The center offers services at the Yerwood Center and still continue to offers program for children and families, social services, translation, interpretation, major contact with the local government, school administrators and parent.",
		image: '../img/1984.jpg'
	},
	{
		year: '2000',
		content: "In 2000, The Haitian Consulate of New York offers Haitian passport services at the Center.",
		image: '../img/1984.jpg'
	},
	{
		year: '1999',
		content: "In 1999, the Center operates out of two locations the Tabernacle of the Holy Spirit First Stamford Youth Church during the school year. The community Center collaborates with Rev Dr. Douglas Mc Arthur, Pastor of the First United Methodist of Stamford who contributed largely by providing funds, volunteers and materials an operated there throughout the Summer.",
		image: '../img/1984.jpg'
	},
	{
		year: '1996',
		content: "In 1996, with the help of Pitney Bowes, Fairfield County Foundation, monthly dinner meetings began. The After School program encouraged parents to participate in monthly dinner event to receive education updates on their children. During monthly dinner meetings, parents shared stories and voucher gift certificates were provided to all participants.",
		image: '../img/1984.jpg'
	},
	{
		year: '1992',
		content: "In 1992, Launched CNA Program at J.M. Wright Technical Institute.",
		image: '../img/1984.jpg'
	},
	{
		year: '1990',
		content: "In 1990, the community center worked with the Stamford Board of Education and offered Trilingual study GED program in English, French & Spanish. An afterschool program and summer school camp was offered helping students with their homework in three different languages.",
		image: '../img/1984.jpg'
	},
	{
		year: '1987',
		content: 'In 1987, ESL Program Launched at Stamford High School.',
		image: '../img/1984.jpg'
	},
	{
		year: '1986',
		content: "In 1986, the center formed an affiliation with the Haitian Centers Council of New York , launched the Refugee Assistance Program.",
		image: '../img/1984.jpg'
	},
	{
		year: '1985',
		content: "In 1985, the center provided interpretation services in courts, workplace, hospitals, and schools.",
		image: '../img/1984.jpg'
	},

	{
		year: '1984',
		content: "On November 13, 1984, the Haitian Community Center’s four principal officers: President Emilio Revolus, Vice President Augustin Pierre-Louis, Executive Director Phebe Rene and Secretary Rev. Paule Rene restructured focus. The mission became to facilitate integration and offer resources for social services, education opportunities and to become the voice of the diverse ethnic cultures in the community. In 1984, Began the after School Program for at risk youths with the help of the Stamford Board of Education, The Youth Service Bureau, United Way & Pitney Bowes",
		image: '../img/1984.jpg'
	},
	{
		year: '1964',
		content: 'In 1964, operating under the name The Haitian Community Center of Stamford, Inc. The focus was to facilitate adjustment of the Haitian immigrants into the Fairfield county area of Connecticut.',
		image: '../img/1984.jpg'
	}
]

// creating the elements on the page dynamically
function createPortfolioItem() {
	hist.forEach(function(ele) {
		var itemDiv = $('<div class="col-md-3 portfolio-item">');
    itemDiv.attr('data-year', ele.year);
    itemDiv.attr('data-content', ele.content);
		var anchorTag = $('<a href="#">');
		var photoDiv = $('<div class="post photo">');
		var foldedCorner = $('<span class="folded-corner">' + '<p class="text">' + ele.year + '</p>' + '</span>');
		var img = $('<img class="img-responsive" src=" ' +  ele.image + '" alt="">');

			photoDiv.append(img);

			photoDiv.append(foldedCorner);

			anchorTag.append(photoDiv)

			itemDiv.append(anchorTag);

			// appending to body
			$('.portfolio-row').append(itemDiv);
      //displayModal(ele)
	})

}

// displaying modal and its information
function displayModal(evt) {
//displaying modal
	var $clickedImage = $(evt.target);
	var $item = $clickedImage.closest('.portfolio-item');
	// modal title
	$('.modal-title').text($item.data('year'));
	// modal mody
		$('#modalBody').text($item.data('content'));
		$('#infoModal').modal('toggle');
}

// calling functions
createPortfolioItem()
$('.img-responsive').on('click', displayModal)