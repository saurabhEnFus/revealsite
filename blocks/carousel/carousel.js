import '../../scripts/reveal.js/dist/reveal.js';
import RevealHighlight from '../../scripts/reveal.js/plugin/highlight/highlight.esm.js'

export default function decorate(block) {
  

  let revealEl = document.createElement('div')
  revealEl.classList.add('reveal');
  
  let slidesEl = document.createElement('div')
  slidesEl.classList.add('slides');
  
  [...block.children].forEach((row,i,array) => {
    
    const section = document.createElement('section');
    section.classList.add(`${row.lastElementChild.textContent}`);
    if (i===0 || i === array.length - 1) {
      section.classList.add('cover-slide')
    }
  //   if (i === array.length - 1) {
  //   section.setAttribute('data-background-video', 'https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4'); 
  //   section.setAttribute('data-background-video-loop', '');
  //   section.setAttribute('data-background-video-muted', '');
  // }
    section.append(row.children[0]);
    section.append(row.children[0]);
    

    if (section.lastElementChild.children[0] && section.lastElementChild.children[0]?.tagName === 'UL') {
  const ul = section.lastElementChild.children[0];
  const listItems = Array.from(ul.children);

  listItems.forEach(li => {
    const sectionInner = document.createElement('section');
    sectionInner.innerHTML = li.innerHTML;
    section.appendChild(sectionInner);
  });

  ul.remove();
}

    slidesEl.append(section);
  });
  
  revealEl.append(slidesEl);

  block.textContent = '';
  block.append(revealEl)

  new Reveal({
    minScale: 1,
    maxScale: 1,
    plugins: [RevealHighlight],
  }).initialize();

}