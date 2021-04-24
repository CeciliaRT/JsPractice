import { Selector} from 'testcafe';

class Page{
   constructor(){
       this.nameDev = Selector('#developer-name');
       this.checkboxRemoTest = Selector('#remote-testing');
       this.radioButtonLinux = Selector('#linux');
       this.listaInterface = Selector('#preferred-interface');
       this.listaInterface = Selector('#preferred-interface > option:nth-child(2)');
       this.checkBoxTriedTc = Selector('#tried-test-cafe');
       this.textArea = Selector('#comments');

       this.sliderObj = Selector('#slider')
       this.slider = {
           handle: Selector('.ui-slider-handle'),
           tick: Selector('.slider-value')
       }
   }
}

export default new Page();