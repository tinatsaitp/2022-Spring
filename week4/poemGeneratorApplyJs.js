var t = 0,

//Array activity
activity = [
'Eating',
'Sleeping',
'Shopping',
'Cooking',
'Reading',
'Writing',
'Singing',
'Traveling',
'Playing Table Tennis',
'Playing Basketball',
'Playing Volleyball',
'Playing Bowling',
'Playing Soccer',
'Playing Golf',
'Playing Handball',
'Playing Hockey',
'Playing Football',
'Playing Softball',
'Playing Tennis',
'Swimming',
'Running',
'Walking',
'Skiing',
'Climbing Mountains',
'Fencing',
'Weightlifting',
'Surfing',
'Cycling',
'Tracking',
'Boxing',
'Hiking'
],

//Array feature
feature = [
'Head',
'Head Shape',
'Face',
'Eyes',
'Eye Color',
'Eyebrows',
'Hair',
'Hair Color',
'Hair Style',
'Ears',
'Nose',
'Lips',
'Mouth',
'Teeth',
'Cheek',
'Dimples',
'Tongue',
'Jaw',
'Body',
'Body Shape',
'Size',
'Weight',
'Height',
'Hands',
'Nails',
'Arms',
'Thighs',
'Calfs',
'Feet',
'Toes',
'Butt',
'Hip',
'Waist',
'Belly',
'Chest',
'Chest Size',
'Shoulders'
],

//Array positive_traits
positive_traits = [
'Active',
'Romantic',
'Serious',
'Sensitive',
'Aspiring',
'Attractive',
'Sexy',
'Calm',
'Charming',
'Tidy',
'Clever',
'Curious',
'Creative',
'Dramatic',
'Enthusiastic',
'Fair',
'Friendly',
'Gentle',
'Hardworking',
'Honest',
'Humble',
'Idealistic',
'Optimistic',
'Objective',
'Patient',
'Playful',
'Popular',
'Practical',
'Pretty',
'Rational',
'Realistic'
],

//Array negative_traits
negative_traits = [
'Shy',
'Deceitful',
'Careless',
'Bizarre',
'Subjective',
'Ordinary',
'Emotional',
'Dreamy',
'Cute',
'Ambitious',
'Obedient',
'Apathetic',
'Anxious',
'Aggressive',
'Tough',
'Arrogantt',
'Artificial',
'Barbaric',
'Childish',
'Decisive',
'Selfish',
'Cruel',
'Dirty',
'Disloyal',
'Foolish',
'Greedy',
'Ignorant',
'Lazy',
'Messy',
'Odd',
'Silly'
];

const btn = document.querySelector('button');

function rand_range(maximum) {
    return Math.floor(Math.random() * (maximum + 1));
}

function choose(array) {
    return array[rand_range(array.length - 1)];
}

function stanza() {
    return 'I Like ' + choose(activity) + '.<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Why do you care?<br \>' +
           'I Am ' + choose(positive_traits) + '.<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Why are you judging?<br \>' +
           'I Like My ' + choose(feature) + '.<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I do not care about your judgment.<br \>' + 
           'I Am ' + choose(negative_traits) + '.<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Because this is not your business.<br \>' +
           'I WILL NOT LISTEN TO YOUR OPINION, I JUST WANT TO BE MYSELF!' + '<br \>&nbsp;';
}

function litany() {
    var last, text, main = document.getElementById('main');
    if (1 > t) { // 5 is how many paragraph of the poem will be produced in the web page
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}



btn.addEventListener('click', () => {
    litany();
});