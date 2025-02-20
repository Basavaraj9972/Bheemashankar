// window.addEventListener('load', function() {
//   console.log("Page loaded");

//   const installButton = document.getElementById('install-button');
//   console.log("Install button element:", installButton);

//   // Always add the click event listener
//   installButton.addEventListener('click', function() {
//     console.log('Install button clicked');
//     if (deferredPrompt) {
//       console.log('deferredPrompt exists at button click', deferredPrompt);
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then(function(choiceResult) {
//         console.log(choiceResult.outcome);

//         if (choiceResult.outcome === 'dismissed') {
//           console.log("User cancelled installation");
//         } else {
//           console.log("User added to Home screen");
//         }

//         deferredPrompt = null;
//         installButton.style.display = 'none'; // Hide the button after prompt
//       });
//     } else {
//       console.log("deferredPrompt does not exist at button click");
//     }
//   });

//   if (deferredPrompt) {
//     console.log("deferredPrompt exists on page load", deferredPrompt);
//     installButton.style.display = 'block'; // Show the install button
//   } else {
//     console.log("deferredPrompt does not exist on page load");
//   }
// });
window.addEventListener('load', function() {
  console.log("Page loaded");

  const logoLink = document.getElementById('logo-link');
  console.log("Logo link element:", logoLink);

  if (logoLink) {
    // Add event listener to the logo link
    logoLink.addEventListener('click', function(event) {
      console.log('Logo clicked');
      event.preventDefault(); // Prevent default navigation

      if (deferredPrompt) {
        console.log('deferredPrompt exists at logo click', deferredPrompt);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);

          if (choiceResult.outcome === 'dismissed') {
            console.log("User cancelled installation");
          } else {
            console.log("User added to Home screen");
          }

          deferredPrompt = null;
        });
      } else {
        console.log("deferredPrompt does not exist at logo click");
      }
    });
  } else {
    console.log("Logo link element not found");
  }
});
