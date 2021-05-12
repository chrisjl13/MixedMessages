const numList =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const adjectivesList = ['Abundant','Accurate','Addicted','Adorable','Adventurous','Afraid','Aggressive','Alcoholic','Alert','Aloof','Ambitious','Ancient','Angry','Animated','Annoying','Anxious','Arrogant','Ashamed',
'Attractive','Auspicious','Awesome','Awful',
'Abactinal','Abandoned','Abashed','Abatable',
'Abatic','Abaxial','Abbatial','Abbreviated',
'Abducent','Abducting','Aberrant','Abeyant',
'Abhorrent','Abiding','Abient','Bad',
'Bashful','Beautiful','Belligerent','Beneficial',
'Best','Big','Bitter','Bizarre',
'Black','Blue','Boring','Brainy',
'Bright','Broad','Broken','Busy',
'Barren','Barricaded','Barytic','Basal',
'Basaltic','Baseborn','Based','Baseless',
'Basic','Bathyal','Battleful','Battlemented',
'Batty','Batwing','Bias','Calm',
'Capable','Careful','Careless','Caring',
'Cautious',
'Charming',
'Cheap',
'Cheerful',
'Chubby',
'Clean',
'Clever',
'Clumsy',
'Cold',
'Colorful',
'Comfortable',
'Concerned',
'Confused',
'Crowded',
'Cruel',
'Curious',
'Curly',
'Cute',
'Damaged',
'Dangerous',
'Dark',
'Deep',
'Defective',
'Delicate',
'Delicious',
'Depressed',
'Determined',
'Different',
'Dirty',
'Disgusting',
'Dry',
'Dusty',
'Daft',
'Daily',
'Dainty',
'Damn',
'Damning',
'Damp',
'Dampish',
'Darkling',
'Darned',
'Dauntless',
'Daylong',
'Early',
'Educated',
'Efficient',
'Elderly',
'Elegant',
'Embarrassed',
'Empty',
'Encouraging',
'Enthusiastic',
'Excellent',
'Exciting',
'Expensive',
'Fabulous',
'Fair',
'Faithful',
'Famous',
'Fancy',
'Fantastic',
'Fast',
'Fearful',
'Fearless',
'Fertile',
'Filthy',
'Foolish',
'Forgetful',
'Friendly',
'Funny',
'Gentle',
'Glamorous',
'Glorious',
'Gorgeous',
'Graceful',
'Grateful',
'Great',
'Greedy',
'Green',
'Handsome',
'Happy',
'Harsh',
'Healthy',
'Heavy',
'Helpful',
'Hilarious',
'Historical',
'Horrible',
'Hot',
'Huge',
'Humorous',
'Hungry',
'Ignorant',
'Illegal',
'Imaginary',
'Impolite',
'Important',
'Impossible',
'Innocent',
'Intelligent',
'Interesting',
'Jealous',
'Jolly',
'Juicy',
'Juvenile',
'Kind',
'Large',
'Legal',
'Light',
'Literate',
'Little',
'Lively',
'Lonely',
'Loud',
'Lovely',
'Lucky',
'Macho',
'Magical',
'Magnificent',
'Massive',
'Mature',
'Mean',
'Messy',
'Modern',
'Narrow',
'Nasty',
'Naughty',
'Nervous',
'New',
'Noisy',
'Nutritious',
'Obedient',
'Obese',
'Obnoxious',
'Old',
'Overconfident',
'Peaceful',
'Pink',
'Polite',
'Poor',
'Powerful',
'Precious',
'Pretty',
'Proud',
'Quick',
'Quiet',
'Rapid',
'Rare',
'Red',
'Remarkable',
'Responsible',
'Rich',
'Romantic',
'Royal',
'Rude',
'Scintillating',
'Secretive',
'Selfish',
'Serious',
'Sharp',
'Shiny',
'Shocking',
'Short',
'Shy',
'Silly',
'Sincere',
'Skinny',
'Slim',
'Slow',
'Small',
'Soft',
'Spicy',
'Spiritual',
'Splendid',
'Strong',
'Successful',
'Sweet',
'Talented',
'Tall',
'Tense',
'Terrible',
'Terrific',
'Thick',
'Thin',
'Tiny',
'Tactful',
'Tailor-made',
'Take-charge',
'Tangible',
'Tasteful',
'Tasty',
'Teachable',
'Teeming',
'Tempean',
'Temperate',
'Tenable',
'Tenacious',
'Tender',
'Tender-hearted',
'Terrific',
'Testimonial',
'Thankful',
'Thankworthy',
'Therapeutic',
'Thorough',
'Thoughtful',
'Ugly',
'Unique',
'Untidy',
'Upset',
'Victorious',
'Violent',
'Vulgar',
'Warm',
'Weak',
'Wealthy',
'Wide',
'Wise',
'Witty',
'Wonderful',
'Worried',
'Young',
'Youthful',
'Zealous'];

const nounList = ['Men',
'Queen',
'Girl',
'Baby',
'Kid',
'Santa Claus',
'Farmer',
'Judge',
'Sister',
'Boy',
'Man',
'Designer',
'Father',
'Mother',
'Daughter',
'King',
'Doctor',
'Dentist',
'Children',
'Detective',
'Brother',
'Lawyer',
'Nurse',
'Child',
'Adult',
'Customer',
'Grandmother',
'Musician',
'Aladdin',
'Grandfather',
'Model',
'Girlfriend',
'People',
'Daisy',
'Friend',
'Dancer',
'Magician',
'Melissa',
'Robin',
'Ocean',
'London',
'Restaurant',
'School',
'Jordan',
'Nigeria',
'Waterfall',
'England',
'River',
'Farm',
'House',
'Garden',
'Zoo',
'Hill',
'Island',
'Earth',
'Home',
'Ground',
'Street',
'Kitchen',
'Garage',
'Hotel',
'Library',
'Planet',
'Room',
'Galaxy',
'Hospital',
'Forest',
'Land',
'Africa',
'Mall',
'Museum',
'Park',
'Company',
'Market',
'Pond',
'Pool',
'Bridge',
'Continent',
'Apple',
'Bed',
'Car',
'Dog',
'Eye',
'Fire',
'Hand',
'Ice',
'Jacket',
'Kitty',
'Lemon',
'Name',
'Picture',
'Kitchen',
'Show',
'Time',
'Umbrella',
'Voice',
'Water',
'Yard',
'Zebra',
'Account',
'Box',
'Christmas',
'Doll',
'Egg',
'Insect',
'Jewelry',
'Keyboard',
'Lion',
'Milk',
'Nest',
'Oil',
'Pig',
'Question',
'Rabbit',
'Stick',
'Top',
'Way',
'Adjustment',
'Cat',
'Door',
'Elephant',
'Fish',
'Grass',
'Head',
'Iron',
'Jumper',
'Leg',
'Money',
'Night',
'Oyster',
'Paper',
'Rain',
'Toy',
'Wind',
'Advertisement',
'Bell',
'Coat',
'Duck',
'Earring',
'Game',
'Kangaroo',
'Laptop',
'Morning',
'Newspaper',
'Party',
'Ring',
'Table',
'Window',
'Agreement',
'Chair',
'Day',
'Floor',
'Interest',
'Juicer',
'Koala',
'Lamb',
'Nail',
'Painting',
'Raincoat',
'Tree',
'Watch',
'Air',
'Back',
'Corn',
'Elbow',
'Goat',
'Horse',
'Invention',
'Jelly',
'Knife',
'Napkin',
'Parrot',
'Thing',
'Wood',
'Amount',
'Bird',
'Chicken',
'Elevator',
'Flower',
'Gown',
'Hamburger',
'Idea',
'Lung',
'Mouse',
'Noodle',
'Pencil',
'Rattle',
'Snow',
'Train',
'Wallet',
'Amusement',
'Bread',
'Cow',
'Engine',
'Feet',
'Garlic',
'Hair',
'Journey',
'Lighter',
'Monkey',
'Pen',
'Rectangle',
'Sun',
'Tablecloth',
'Animal',
'Ball',
'Cake',
'Finger',
'Ginger',
'Heart',
'Jam',
'Kite',
'Luggage',
'Mouth',
'Notebook',
'Piano',
'Seed',
'Television',
'Weed',
'Answer',
'Birthday',
'Eyeball',
'Fox',
'Giraffe',
'Horn',
'Jellybean',
'Knowledge',
'Lamp',
'Mango',
'Nose',
'Pillow',
'Rocket',
'Song',
'Thought',
'Week',
'Apparatus',
'Chin',
'Design',
'Eyelash',
'Frog',
'Gift',
'Hat',
'Kidney',
'Mobile',
'Pizza',
'Roll',
'Squirrel',
'Toe',
'Word',
'Approval',
'Bear',
'Destruction',
'Fan',
'Kiss',
'Music',
'Sandwich',
'Toenail',
'Boat',
'Detail',
'Flag',
'Guitar',
'Hammer',
'Knee',
'Mirror',
'Plastic',
'Sand',
'Tongue',
'Backbone',
'Canvas',
'Development',
'Fruit',
'Helicopter',
'Lizard',
'Potato',
'Screen',
'Tractor',
'Bag',
'Cause',
'Digestion',
'Fork',
'Lunch',
'Helmet',
'Model',
'Package',
'Sentence',
'Beard',
'Chalk',
'Direction',
'Film',
'Glass',
'Holiday',
'Laugh',
'Pajamas',
'Shadow',
'Beetroot',
'Cloth',
'Discovery',
'Flame',
'Honey',
'Letter',
'Shirt',
'Body',
'Color',
'Discussion',
'Flight',
'Hour',
'Lettuce',
'Moonlight',
'Shoe',
'Book',
'Committee',
'Disease',
'Fold',
'Life',
'Medicine',
'Phone',
'Shoulder',
'Bookcase',
'Disgust',
'Food',
'Light',
'Microscope',
'Point',
'Shovel',
'Boot',
'Camel',
'Distance',
'Force',
'Lip',
'Skeleton',
'Bottle',
'Caravan',
'Dad',
'Form',
'Lipstick',
'Machine',
'Skin',
'Bowl',
'Chocolate',
'Daisy',
'Lunge',
'Magazine',
'Population',
'Slime',
'Circle',
'Face',
'Slip',
'Bus',
'Class',
'Dark',
'Family',
'Motorcycle',
'Socks',
'Clock',
'Daytime',
'Fertilizer',
'March',
'Soil',
'Computer',
'Desert',
'Foot',
'Star',
'Doorway',
'Fridge',
'Minute',
'Stomach',
'Cupcake',
'Dream',
'Frown',
'Movie',
'Curtain',
'Dress',
'Custard'];

/*const clear = () => {
   return document.getElementById("nameArea").value = ""; // Is not working in webpage?
};
*/


