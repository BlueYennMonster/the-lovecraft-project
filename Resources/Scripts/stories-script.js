//Get container ids

let selectedText = document.getElementById("selected-text");
let selectedImage = document.getElementById("selected-image");
let storyButton = document.getElementById("preview-button-form");

//Story information

let stories = [
	
	{
		name: "At the Mountains of Madness",
		image: "https://www.themarysue.com/wp-content/uploads/2014/07/at-the-mountains-of-madness.jpg",
		text: "I am forced into speech because men of science have refused to follow my advice without knowing why. It is altogether against my will that I tell my reasons for opposing this contemplated invasion of the antarctic—with its vast fossil-hunt and its wholesale boring and melting of the ancient ice-cap—and I am the more reluctant because my warning may be in vain. Doubt of the real facts, as I must reveal them, is inevitable; yet if I suppressed what will seem extravagant and incredible there would be nothing left. The hitherto withheld photographs, both ordinary and aërial, will count in my favour; for they are damnably vivid and graphic. Still, they will be doubted because of the great lengths to which clever fakery can be carried. The ink drawings, of course, will be jeered at as obvious impostures; notwithstanding a strangeness of technique which art experts ought to remark and puzzle over.",
		url: "../At-The-Mountains-Of-Madness/index.html"
	},

	{
		name: "Call of Cthulhu",
		image: "https://cdn.shopify.com/s/files/1/2095/9241/products/god-of-gifts-cthulhu-ultimate-destruction-wall-art-22822577605_1024x1024.jpg?v=1527378450",
		text: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age.",
		url: "../Call-Of-Cthulhu/index.html"
	},

	{
		name: "Pickman's Model",
		image: "https://i.ytimg.com/vi/0uZy_9I-_uQ/maxresdefault.jpg",
		text: "You needn’t think I’m crazy, Eliot—plenty of others have queerer prejudices than this. Why don’t you laugh at Oliver’s grandfather, who won’t ride in a motor? If I don’t like that damned subway, it’s my own business; and we got here more quickly anyhow in the taxi. We’d have had to walk up the hill from Park Street if we’d taken the car.",
		url: "../Pickmans-Model/index.html"
	},

	{
		name: "The Cats of Ulthar",
		image: "http://cdn0.wideopenpets.com/wp-content/uploads/2017/12/Untitled-design-2-2-770x405.png",
		text: "It is said that in Ulthar, which lies beyond the river Skai, no man may kill a cat; and this I can verily believe as I gaze upon him who sitteth purring before the fire. For the cat is cryptic, and close to strange things which men cannot see. He is the soul of antique Aegyptus, and bearer of tales from forgotten cities in Meroë and Ophir. He is the kin of the jungle’s lords, and heir to the secrets of hoary and sinister Africa. The Sphinx is his cousin, and he speaks her language; but he is more ancient than the Sphinx, and remembers that which she hath forgotten.",
		url: "../The-Cats-Of-Ulthar/index.html"
	},

	{
		name: "The Dunwich Horror",
		image: "https://cdna0.artstation.com/p/assets/images/images/004/068/964/large/joseph-diaz-001.jpg?1480008805",
		text: "When a traveller in north central Massachusetts takes the wrong fork at the junction of the Aylesbury pike just beyond Dean’s Corners he comes upon a lonely and curious country. The ground gets higher, and the brier-bordered stone walls press closer and closer against the ruts of the dusty, curving road. The trees of the frequent forest belts seem too large, and the wild weeds, brambles, and grasses attain a luxuriance not often found in settled regions. At the same time the planted fields appear singularly few and barren; while the sparsely scattered houses wear a surprisingly uniform aspect of age, squalor, and dilapidation. Without knowing why, one hesitates to ask directions from the gnarled, solitary figures spied now and then on crumbling doorsteps or on the sloping, rock-strown meadows. Those figures are so silent and furtive that one feels somehow confronted by forbidden things, with which it would be better to have nothing to do. When a rise in the road brings the mountains in view above the deep woods, the feeling of strange uneasiness is increased. The summits are too rounded and symmetrical to give a sense of comfort and naturalness, and sometimes the sky silhouettes with especial clearness the queer circles of tall stone pillars with which most of them are crowned.",
		url: "../The-Dunwich-Horror/index.html"
	},

	{
		name: "The Shadow Over Innsmouth",
		image: "https://lovecraftianscience.files.wordpress.com/2014/01/inssmouth_small_john_dunn2.jpg",
		text: "During the winter of 1927–28 officials of the Federal government made a strange and secret investigation of certain conditions in the ancient Massachusetts seaport of Innsmouth. The public first learned of it in February, when a vast series of raids and arrests occurred, followed by the deliberate burning and dynamiting—under suitable precautions—of an enormous number of crumbling, worm-eaten, and supposedly empty houses along the abandoned waterfront. Uninquiring souls let this occurrence pass as one of the major clashes in a spasmodic war on liquor.",
		url: "../The-Shadow-Over-Innsmouth/index.html"
	}

];



//Function to set container content

function setContent(el){

	let storyObject = findObjectByKey(stories, "name", el.textContent);

	selectedText.textContent = storyObject.text; 
	selectedImage.src = storyObject.image;
	storyButton.action = storyObject.url;

};

function findObjectByKey(array, key, value){

	for (let i = 0; i < array.length; i++){
		if (array[i][key] === value) {
			name = array[i].name;
			return array[i];
		} 
	}

};

//Add click event listeners to all story titles

for(let i = 1; i <= 6; i++){
	let story = document.getElementById("story" + i);
	story.addEventListener("click", function(){
		setContent(this);
	})
};
