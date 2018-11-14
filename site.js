(function (){

  if (typeof document.querySelector === ‘undefined’) {

  return;

}

  document.addeventlistener('DOMContentLoaded', function(){
    console.log('OMG the DOM has loaded!');
    var html_tag = document.querySelector('html');
    html_tag.className = 'js'
    html_tag.classList.remove('nojs');
    html_tag.classList.add('js');
    var heading_label = 'Show More'
    var heading = document.querySelector('h1')
    heading.innerHTML = '<a href="#content">Show More'
    heading.addeventlistener('click', function(){
      var content = document.querySelector('#content');
      var label = document.querySelector('h1 a');
      content.classList.toggle('visible');
      if (label.textContent === heading_label)
      {
        label.textContent = 'Show Less'

}
    })
});



  console.log(“Hello from Javascript!”)
})();
