$(document).ready(function(){
    let fcc = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";

    $.getJSON(fcc, function(data){
        // not streaming
        if(data.stream === null){
            // the big lebowski quotes
            let quoteUrl = "http://lebowski.me/api/quotes/random";
            $.ajax({
                type: "GET",
                url: quoteUrl,
                asnyc: false,
                dataType: "json",
            }).done(function(quote){
                // console.log(quote);
                $("#movieQuote").html(`<p>"${quote.quote.lines[0].text}"</p><p>- ${quote.quote.lines[0].character.name}</p>`)
            });
            $("#fccStream").html(`<h1><a href='url' target='_blank'> freeCodeCamp is currently offline.</a></h1><h3>Bummer dude! But here is a random quote from the movie "The Big Lebowski" for ya!</h3>`);
        } else {
            // when streaming
            $("#fccStream").html(`<h3><a href='url' target='_blank'>freeCodeCamp is ${data.stream.stream_type}!</a></h3>`);
            $("#online").html(`<a href="url"><img src="${data.stream.channel.logo}"></a>
<p><strong>Viewers:</strong> ${data.stream.viewers}</p>
<p><strong>Title:</strong> ${data.stream.channel.status}</p>
<p><strong>Game:</strong> ${data.stream.game}</p>`)
        }
    });

    let followersUrl = "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows";
    let following = [];
    $.getJSON(followersUrl, function(data1){
        // iterate through the followers of the channel
        for (let i = 0; i < data1.follows.length; i++){
            let displayName = data1.follows[i].user.display_name;
            following.push(displayName);
        }
        // adding to the array of followers
        following.push("martinimonsters");
        following.push("barstoolsports");
        following.push("brunofin");
        following.push("comster404");
        following.push("h3h3productions");
        following.push("noobs2ninjas");

        // console.log(following);

        // multiple getJSON calls using a for loop
        for (let j = 0; j < following.length; j++){
            let url2 = "https://wind-bow.gomix.me/twitch-api/streams/" + following[j] + "/?callback=?";

            $.getJSON(url2).done(function(data2){
                let logo, status, name;
                // console.log(data2.stream);

                if(data2.stream === null){
                    $("#followerList").append(`<li>${following[j]} is offline </li>`);
                } else {
                    // console.log(data2.stream);
                    $("#followerList").prepend(`<li>
                        <h3><a href="${data2.stream.channel.url}" target="_blank">${following[j]} is ${data2.stream.stream_type}</h3></a>
                        <p id="image"><a class="img" href="${data2.stream.channel.url}" target="_blank"><img src="${data2.stream.channel.logo}"></a></p>
                        Currently streaming: <small>${data2.stream.channel.status}</small>
                        <p><small>Viewers: ${data2.stream.viewers}</small></p>                     
                        </li>`);
                }
            });
        }
    });
    // console.log(following);
});

