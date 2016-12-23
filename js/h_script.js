
var img_array=[
	"home_img_1.jpg",
	// "home_img_2.jpg",
	// "home_img_3.jpg",
	// "home_img_4.jpg",
	// "home_img_5.jpg",
	// "home_img_6.jpg",
	// "home_img_7.jpg",
	// "home_img_8.jpg",
	// "home_img_11.jpg",
	// "home_img_12.jpg",
	// "home_img_13.jpg",
	// "home_img_14.jpg"
	];

var quote_array=[
	"Hope is being able to see that there is light despite all of the darkness.",
	"In order to succeed, we must first believe that we can.",
	"It does not matter how slowly you go as long as you do not stop.",
	"With the new day comes new strength and new thoughts",
	"Problems are not stop signs, they are guidelines.",
	"No one has ever become poor by giving.",
	"It's not how much we give but how much love we put into giving.",
	"When we give cheerfully and accept gratefully, everyone is blessed",
	"We only have what we give.",
	"We are an inspiration to one another.",
	"Those who are happiest are those who do the most for others.",
	"A kind gesture can reach a wound that only compassion can heal.",
	"Doing nothing for others is the undoing of ourselves",
	"Goodness is about character - integrity, honesty, kindness, generosity, moral courage, and the like. More than anything else, it is about how we treat other people. ",
	"Where there is charity and wisdom, there is neither fear nor ignorance.",
	"Charity is a supreme virtue, and the great channel through which the mercy of God is passed onto mankind.",
	"Every good act is charity. A man's true wealth hereafter is the good that he does in this world to his fellows.",
	"Success is nothing more than a few simple disciplines, practiced every day.",
	"Do all the good you can. By all the means you can. In all the ways you can. In all the places you can. At all the times you can. To all the people you can. As long as ever you can.",
	"Charity work is very important to me and gives me an opportunity to give back to my community. I've always been a big supporter of many different charities, have donated millions of dollars to them, and it just feels great to do and be able to help others, especially children. ",
	"It's not how much we give but how much love we put into giving.",
	"And now these three remain: faith, hope and love. But the greatest of these is love.",
	"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
];

var author_array=[
	"- Desmond Tutu",
	"- Nikos Kazantzakis",
	"- Confucius",
	"- Eleanor Roosevelt",
	"- Robert H. Schuller",
	"- Anne Frank",
	"- Mother Teresa",
	"- Maya Angelou",
	"- Isabel Allende",
	"- Lailah Gifty Akita",
	"- Booker T. Washington",
	"- Steve Maraboli",
	"- Horace Mann",
	"- Dennis Prager",
	"- Francis of Assisi",
	"- Conrad Hilton",
	"- Moliere",
	"- Jim Rohn",
	"- John Wesley",
	"- Richard MacDonald",
	"- Mother Teresa",
	"- Holy Bible: KJV",
	"- Bil Keane",
];

$('#home_hero').css({'background':' linear-gradient(rgba(50,50,50,0.3),rgba(50,50,50,0.3)),url(img/home/'+img_array[Math.floor(Math.random()*img_array.length)]+')'});
$('#home_hero').css({'background-size':'cover'});
$('#home_hero').css({'background-repeat':'no-repeat'});

var quote_rand=Math.floor(Math.random()*quote_array.length);
$('#home_author').text(author_array[quote_rand]);
$('#home_quote').text(quote_array[quote_rand])

