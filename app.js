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
    res.render('index', {
        title: "Brukner Nature Center",
        headerImage: "background-4"
    });
});
// home path or index
app.get('/index.html', (req, res) => {
    res.render('index', {
        title: "Brukner Nature Center",
        headerImage: "background-4"
    });
});

// about-us path
app.get('/about-us.html', (req, res) => {
    res.render('about-us', {
        title: "about us",
        headerImage: "background-4"
    });
});

// 5k run wild path
app.get('/5k-run-wild.html', (req, res) => {
    res.render('5k-run-wild', {
        title: "5k-run wild",
        headerImage: "background-5"
    });
});

// admission path
app.get('/admission.html', (req, res) => {
    res.render('admission', {
        title: "admission",
        headerImage: "background-4"
    });
});

// adopt a cage path
app.get('/adopt-a-release-box.html', (req, res) => {
    res.render('adopt-a-release-box', {
        title: "adopt-a-box",
        headerImage: "background-3"
    });
});

// adopt an animal
app.get('/adopt-an-animal.html', (req, res) => {
    res.render('adopt-an-animal', {
        title: "adopt-an-animal",
        headerImage: "background-3"
    });
});

// adopt a tree
app.get('/adopt-a-tree.html', (req, res) => {
    res.render('adopt-a-tree', {
        title: "adopt-a-tree",
        headerImage: "background-3"
    });
});

// amazon smile
app.get('/amazonsmile.html', (req, res) => {
    res.render('amazonsmile', {
        title: "amazonsmile",
        headerImage: "background-3"
    });
});

// arts-crafts-show
app.get('/arts-crafts-show.html', (req, res) => {
    res.render('arts-crafts-show', {
        title: "arts crafts show",
        headerImage: "background-5"
    });
});

// bird watching
app.get('/bird-watching.html', (req, res) => {
    res.render('bird-watching', {
        title: "bird watching",
        headerImage: "background-4"
    });
});

// bird watch pledge
app.get('/bird-watch-pledge.html', (req, res) => {
    res.render('bird-watch-pledge', {
        title: "bird watch pledge",
        headerImage: "background-3"
    });
});

// birthdays
app.get('/birthdays.html', (req, res) => {
    res.render('birthdays', {
        title: "birthdays",
        headerImage: "background-5"
    });
});

// brochures
app.get('/brochures.html', (req, res) => {
    res.render('brochures', {
        title: "brochures",
        headerImage: "background-2"
    });
});

// buildings
app.get('/buildings.html', (req, res) => {
    res.render('buildings', {
        title: "buildings",
        headerImage: "background-4"
    });
});

// calendar
app.get('/calendar.html', (req, res) => {
    res.render('calendar', {
        title: "calendar",
        headerImage: "background-5"
    });
});

// cfc-donor-pledge
app.get('/cfc-donor-pledge.html', (req, res) => {
    res.render('cfc-donor-pledge', {
        title: "cfc donor pledge",
        headerImage: "background-3"
    });
});

// dine to donate
app.get('/dine-to-donate.html', (req, res) => {
    res.render('dine-to-donate', {
        title: "dine to donate",
        headerImage: "background-3"
    });
});

// directions
app.get('/directions.html', (req, res) => {
    res.render('directions' , {
        title: "directions",
        headerImage: "background-4"
    });
});

// haunted-woods
app.get('/haunted-woods.html', (req, res) => {
    res.render('haunted-woods' , {
        title: "haunted woods",
        headerImage: "background-5"
    });
});

// hiking
app.get('/hiking.html', (req, res) => {
    res.render('hiking' , {
        title: "hiking",
        headerImage: "background-4"
    });
});

// kroger-rewards
app.get('/kroger-rewards.html', (req, res) => {
    res.render('kroger-rewards' , {
        title: "kroger rewards",
        headerImage: "background-3"
    });
});

// leave-a-legacy
app.get('/leave-a-legacy.html', (req, res) => {
    res.render('leave-a-legacy' , {
        title: "leave a legacy",
        headerImage: "background-3"
    });
});

// member
app.get('/member.html', (req, res) => {
    res.render('member', {
        title: "member",
        headerImage: "background-3"
    });
});

// memorial-contribution
app.get('/memorial-contribution.html', (req, res) => {
    res.render('memorial-contribution', {
        title: "memorial contribution",
        headerImage: "background-3"
    });
});

// monarch-celebration
app.get('/monarch-celebration.html', (req, res) => {
    res.render('monarch-celebration', {
        title: "monarch celebration",
        headerImage: "background-5"
    });
});

// nature-shop
app.get('/nature-shop.html', (req, res) => {
    res.render('nature-shop' , {
        title: "nature shop",
        headerImage: "background-3"
    });
});

// photo-contest
app.get('/photo-contest.html', (req, res) => {
    res.render('photo-contest', {
        title: "photo contest",
        headerImage: "background-5"
    });
});

// preschool
app.get('/preschool.html', (req, res) => {
    res.render('preschool', {
        title: "preschool",
        headerImage: "background-5"
    });
});

// rivers-edge
app.get('/rivers-edge.html', (req, res) => {
    res.render('rivers-edge', {
        title: "rivers edge",
        headerImage: "background-4"
    });
});

// schools
app.get('/schools.html', (req, res) => {
    res.render('schools' , {
        title: "schools",
        headerImage: "background-2"
    });
});

// scouting
app.get('/scouting.html', (req, res) => {
    res.render('scouting' , {
        title: "scouting",
        headerImage: "background-2"
    });
});

// seniors
app.get('/seniors.html', (req, res) => {
    res.render('seniors' , {
        title: "seniors",
        headerImage: "background-2"
    });
});

// staff
app.get('/staff.html', (req, res) => {
    res.render('staff' , {
        title: "staff",
        headerImage: "background-1"
    });
});

// summer camp
app.get('/summer-camp.html', (req, res) => {
    res.render('summer-camp' , {
        title: "summer camp",
        headerImage: "background-5"
    });
});

// the art of nature
app.get('/the-art-of-nature.html', (req, res) => {
    res.render('the-art-of-nature' , {
        title: "the art of nature",
        headerImage: "background-5"
    });
});

// volunteer
app.get('/volunteer.html', (req, res) => {
    res.render('volunteer' , {
        title: "volunteer",
        headerImage: "background-3"
    });
});

// wild art
app.get('/wild-art.html', (req, res) => {
    res.render('wild-art' , {
        title: "wild art",
        headerImage: "background-5"
    });
});

// wildlife-ambassadors
app.get('/wildlife-ambassadors.html', (req, res) => {
    res.render('wildlife-ambassadors', {
        title: "wildlife ambassadors",
        headerImage: "background-4"
    });
});

// wildlife-rehab
app.get('/wildlife-rehab.html', (req, res) => {
    res.render('wildlife-rehab', {
        title: "wildlife rehab",
        headerImage: "background-2"
    });
});

// winter-camp
app.get('/winter-camp.html', (req, res) => {
    res.render('winter-camp', {
        title: "winter camp",
        headerImage: "background-5"
    });
});

// wishlist
app.get('/wishlist.html', (req, res) => {
    res.render('wishlist', {
        title: "wish list",
        headerImage: "background-3"
    });
});

// young birders club
app.get('/young-birders-club.html', (req, res) => {
    res.render('young-birders-club', {
        title: "young birders club",
        headerImage: "background-5"
    });
});
// 404 error
app.get('/404.html', (req, res) => {
    res.render('404', {
        title: "Error 404",
        headerImage: "background-1"
    });
});

/* End Routing */


// serve static files
app.use(express.static('public'));

// start listening on port 3000
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});