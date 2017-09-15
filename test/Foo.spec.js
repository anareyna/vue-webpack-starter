import { expect } from 'chai';
import { mount } from 'avoriaz';
import Foo from '../src/components/Foo.vue';

describe('Foo.vue', () => {
   it('tiene un elemento root con clase foo', () => {
     const wrapper = mount(Foo);
     expect(wrapper.is('.foo')).to.equal(true);
   });

  it('tiene un elemento root con clase foo', () => {
    const passedProp = 'some text';
    const wrapper = mount(Foo, {propsData: {passedProp}});
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal(passedProp);
  });

  // it('cambia texto de h1 cuando se hace click en #change-text', () => {
  //   const wrapper = mount(Foo);
  //   const changeMessage = wrapper.find('#change-text')[0];
  //   changeMessage.trigger('click');
  //   const h1 = wrapper.find('h1')[0];

  //   expect(h1.text()).to.equal('new message');
  // });

  // it('cambia texto de h4 cuando se hace click en #change-message-other', () => {
  //   const wrapper = mount(Foo);
  //   const changeMessageOther = wrapper.find('#change-message-other')[0];
  //   changeMessageOther.trigger('click');
  //   const h4 = wrapper.find('h4')[0];

  //   expect(h4.text()).to.equal('otro mensaje');
  // });
});
