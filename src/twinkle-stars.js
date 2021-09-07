var TwinkleStar = (function () {

    class TwinkleStar {
        constructor(element) {
            if (!(element instanceof Node)) {
                throw ("Can't initialize TwinkleStar because " + element + " is not a Node.");
            }

            let count = 300;

            for (var i = 0; i < count; i++) {
                let star = document.createElement("i");
                let x = Math.floor(Math.random() * 100);
                let y = Math.floor(Math.random() * 100);
                let duration = Math.random() * 100;
                let size = Math.random() * 2;

                star.style.left = x + '%';
                star.style.top = y + '%';
                star.style.width = 1 + size + 'px';
                star.style.height = 1 + size + 'px';

                star.style.animationDuration = 20 + duration + 's';
                star.style.animationDelay = duration + 's';

                element.appendChild(star);
            }
        }
        static init(elements) {
            if (elements instanceof Node) {
              elements = [elements];
            }
        
            if (elements instanceof NodeList) {
              elements = [].slice.call(elements);
            }
        
            if (!(elements instanceof Array)) {
              return;
            }
        
            elements.forEach((element) => {
              if (!("twinkleStar" in element)) {
                element.twinkleStar = new TwinkleStar(element);
              }
            });
          }
    }
    return TwinkleStar;
    
}());
