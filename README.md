I am developing this MERN stack project to serve as a wedding website for my upcoming wedding in September 2026. My goal here was to get
put the skills I developed in my front and back end dev classes to use, and finally put them all together in one place. Of course, I also
wanted my first full stack project to have some real world utility, and building my own wedding's website from the groud up seemed like a
wonderful way to achieve that.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

NOTES AND NEEDED FIXES
# The Content Security Policy is set in the head element of [index.html] using the [connect-src] <meta> tag. Apparently, this is not
# ideal as it may not catch all malicious scripts or may allow data leaking from the app. Apparently it is best practice to set the 
# Content Security Policy in the HTML response header

# ADD: Hide 'Additional Guests' until guest clicks "Yes" on attending
# ADD: "Remove" button for additional guest field
# ADD: Form data verification
# ADD: An explainer paragraph for the 'Additional Guests' field... Something like "If you are bringing a plus one or children..."