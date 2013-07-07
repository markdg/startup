/* Main program

====Description====
App allows users to get their travel itineraries crowd rated.

Growth is based on rapidly growing registered users, getting them 
to enter itineraries, and getting them to rate other users' itineraries. 
To this end, unregistered/not logged in visitors are shown only the top rated 
itinerary and are encouraged to register/login to view more and create their 
own. Users are incentivized to rate itineraries by use of a leader board of 
top raters that is shown to everyone. Other incentives may be offered 
for doing ratings. Thumbs up/thumbs down on ratings lets other users 
fame or shame a rater who is giving good/bad quality ratings.

Logged in users can create and save itineraries, have them rated, and 
rate other users' itineraries. They receive an alert if there are 
new ratings of their itineraries. They can search all itineraries by 
destination and copy an itinerary to their own account, subject to 
limits based on their level of membership.

----Monetization----
::Freemium model::

1. Free users can create/save 3 itineraries, search all itineraries but 
not automatically copy them. 

2. Free users who have confirmed an email address also get email 
alerts when their itineraries have received new ratings.

3. Free users who have rated at least 2 itineraries can copy others' 
itineraries to their own account.

4. Basic paid users have all limit of 10 itineraries. 

5. Premium paid user level targets business travelers who will receive 
real time ratings via machine learning algorithm and rapid alerts.

::Mail list::
Users can confirm their email address to receive additional 
features such as alerts. This list will be marketed to.

::Affiliate links::
Suggest transportation and accommodations based on itinerary with 
affiliate links can be shown within the app.


====Pseudo code====
----Screens---- 
start screen {
    greeting
    register_button
    login_button
    top rated itinerary
    leader board
}

register new user screen {
    register prompt
    email input field
    username input field
    password input field
    register now button
    cancel_button
}

login screen {
    login prompt
    username input field
    password input field
    password_recover_button
    enter_button
    cancel_button
}

login failed screen {
    login failed message
    username input field
    password input field
    password_recover_button
    enter_button
    cancel_button
}

password recovery screen {
    password recovery message
    username input field
    send_password_button
}

logged in screen {
    welcome user
    create_new_button
    find_existing_button
    rate_button
    new ratings alert
    search_button
    leader board
}

create new itinerary screen {
    itinerary name input field
    column headings
    day, location and sites input fields
    next_button
    save_button
    return_button
}

find existing itinerary screen {
    heading
    list_button of saved itineraries for this user
    return_button
}

find existing failed screen {
    heading
    list_button of saved itineraries for this user
    return_button
}

newest or top itineraries screen {
    heading
    list of newest or top itineraries
    cancel_button
}

rate screen {
    heading
    input field
    search_button
    return_button
}

search screen {
    newest_button
    top_button
    search input field
    search_now_button
}
----End Screens----

----Button Click Actions----

register_button {
    register new user
    load logged in screen
}

login_button {
    load login screen
}

enter_button {
    verify login credentials
    if verified {
        load logged in screen
    }
    else {
        load login failed screen
    }
}

create_new_button {
    create new itinerary object
    load create new itinerary screen
}

find_existing_button {
    load existing itinerary screen
}

list_button {
    input search criteria
    search database for existing itinerary
    if found {
        load existing itinerary into itinerary object
        load create screen with fields prepopulated
    }
    else {
        load existing failed screen
    }
}

save_button {
    save itinerary object to database
}

rate_button {
    load rate screen
}

search_button {
    load search screen
}

search_now_button {
    search database
    if found {
        load rating display screen
    }
    else {
        load search failed screen
    }
}

newest_button {
    load newest or top itineraries screen with newest rated itineraries
}

top_button {
    load newest or top itineraries screen with top rated itineraries
}

cancel_button {
    load start screen
}

return_button {
    load logged in screen
}


====End Pseudocode====
*/

/*====Real Code ===*/

