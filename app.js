const express = require('express');
const exphbs = require('express-handlebars');

// create express app
const app = express();

// configure express-handlebars as view engine
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

/* Start Routing */
// home path
app.get('/', (req, res) => {
    res.render('index');
});
// home path or index
app.get('/index.html', (req, res) => {
    res.render('index');
});

// about-us path
app.get('/about-us.html', (req, res) => {
    res.render('about-us');
});

// 5k run wild path
app.get('/5k-run-wild.html', (req, res) => {
    res.render('5k-run-wild');
});

// admission path
app.get('/admission.html', (req, res) => {
    res.render('admission');
});

// adopt a cage path
app.get('/adopt-a-release-box.html', (req, res) => {
    res.render('adopt-a-release-box');
});

// adopt an animal
app.get('/adopt-an-animal.html', (req, res) => {
    res.render('adopt-an-animal');
});

// adopt a tree
app.get('/adopt-a-tree.html', (req, res) => {
    res.render('adopt-a-tree');
});

// amazon smile
app.get('/amazonsmile.html', (req, res) => {
    res.render('amazonsmile');
});

// arts-crafts-show
app.get('/arts-crafts-show.html', (req, res) => {
    res.render('arts-crafts-show');
});

// bird watching
app.get('/bird-watching.html', (req, res) => {
    res.render('bird-watching');
});

// bird watch pledge
app.get('/bird-watch-pledge.html', (req, res) => {
    res.render('bird-watch-pledge');
});

// birthdays
app.get('/birthdays.html', (req, res) => {
    res.render('birthdays');
});

// brochures
app.get('/brochures.html', (req, res) => {
    res.render('brochures');
});

// brochures
app.get('/brochures.html', (req, res) => {
    res.render('brochures');
});

// buildings
app.get('/buildings.html', (req, res) => {
    res.render('buildings');
});

// calendar
app.get('/calendar.html', (req, res) => {
    res.render('calendar');
});

// cfc-donor-pledge
app.get('/cfc-donor-pledge.html', (req, res) => {
    res.render('cfc-donor-pledge');
});

// dine to donate
app.get('/dine-to-donate.html', (req, res) => {
    res.render('dine-to-donate');
});

// directions
app.get('/directions.html', (req, res) => {
    res.render('directions');
});

// haunted-woods
app.get('/haunted-woods.html', (req, res) => {
    res.render('haunted-woods');
});

// hiking
app.get('/hiking.html', (req, res) => {
    res.render('hiking');
});

// kroger-rewards
app.get('/kroger-rewards.html', (req, res) => {
    res.render('kroger-rewards');
});

// leave-a-legacy
app.get('/leave-a-legacy.html', (req, res) => {
    res.render('leave-a-legacy');
});

// member
app.get('/member.html', (req, res) => {
    res.render('member');
});

// memorial-contribution
app.get('/memorial-contribution.html', (req, res) => {
    res.render('memorial-contribution');
});

// monarch-celebration
app.get('/monarch-celebration.html', (req, res) => {
    res.render('monarch-celebration');
});

// nature-shop
app.get('/nature-shop.html', (req, res) => {
    res.render('nature-shop');
});

// photo-contest
app.get('/photo-contest.html', (req, res) => {
    res.render('photo-contest');
});

// preschool
app.get('/preschool.html', (req, res) => {
    res.render('preschool');
});

// rivers-edge
app.get('/rivers-edge.html', (req, res) => {
    res.render('rivers-edge');
});

// schools
app.get('/schools.html', (req, res) => {
    res.render('schools');
});

// scouting
app.get('/scouting.html', (req, res) => {
    res.render('scouting');
});

// seniors
app.get('/seniors.html', (req, res) => {
    res.render('seniors');
});

// staff
app.get('/staff.html', (req, res) => {
    res.render('staff');
});

// summer camp
app.get('/summer-camp.html', (req, res) => {
    res.render('summer-camp');
});

// the art of nature
app.get('/the-art-of-nature.html', (req, res) => {
    res.render('the-art-of-nature');
});

// volunteer
app.get('/volunteer.html', (req, res) => {
    res.render('volunteer');
});

// wild art
app.get('/wild-art.html', (req, res) => {
    res.render('wild-art');
});

// wildlife-ambassadors
app.get('/wildlife-ambassadors.html', (req, res) => {
    res.render('wildlife-ambassadors');
});

// wildlife-rehab
app.get('/wildlife-rehab.html', (req, res) => {
    res.render('wildlife-rehab');
});

// winter-camp
app.get('/winter-camp.html', (req, res) => {
    res.render('winter-camp');
});

// wishlist
app.get('/wishlist.html', (req, res) => {
    res.render('wishlist');
});

// young birders club
app.get('/young-birders-club.html', (req, res) => {
    res.render('young-birders-club');
});

/* End Routing */


// serve static files
app.use(express.static('public'));

// start listening on port 3000
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});