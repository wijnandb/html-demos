var envelope = document.getElementsByClassName("envelope")[0]
  , card = document.getElementsByClassName("card")[0]
  , animateEnvelope = function(event) {
  if (event.animationName == 'rotate-envelope-front-3d' 
    || event.animationName == 'rotate-envelope-front' ) {
    envelope.setAttribute('class', 'envelope rotated opening')
  }
  if (event.animationName == 'open-envelope-3d'
    || event.animationName == 'open-envelope') {
    envelope.setAttribute('class', 'envelope rotated opened')
    card.setAttribute('class', 'card extracting')
  }
  if (event.animationName == 'extract-card') {
    card.setAttribute('class', 'card extracted')
  }
}

envelope.setAttribute('class', 'envelope rotating');
envelope.addEventListener('webkitAnimationEnd', animateEnvelope, false );
envelope.addEventListener('animationend', animateEnvelope, false );
