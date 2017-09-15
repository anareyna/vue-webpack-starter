import { expect } from 'chai';   // expect 
import { mount } from 'avoriaz'; // dom -> mount
import Bar from '../src/components/Bar.vue';

describe('Bar.vue', () => { // mocha
   // it('devuelve un div con clase bar', () => {
   //   const wrapper = mount(Bar);
   //   expect(wrapper.is('div')).to.equal(true);
   //   expect(wrapper.hasClass('bar')).to.equal(true);
   // });

   // it('renderiza 4 listas de elementos en un .parent-ul', () => {
   //   const wrapper = mount(Bar);
   //   const listElements = wrapper.find('.parent-ul li');
   //   expect(listElements.length).to.equal(4);
   // });

   it('cambia texto de h1 cuando se hace click en #change-text', () => {
    const wrapper = mount(Bar);
    const changeMessage = wrapper.find('#change-message')[0];
    changeMessage.trigger('click');
    const h1 = wrapper.find('h1')[0];

    expect(h1.text()).to.equal('new message');
  });
});
