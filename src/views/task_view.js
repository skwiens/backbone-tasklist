import Backbone from 'backbone';
import Task from '../models/task';

const TaskView = Backbone.View.extend({
  // params is an object. it contains a template. We're going to assign that tempalte to the new view we are creating.
  initialize(params) {
    this.template = params.template;
    // good practice to have this in every view
    this.listenTo(this.model, "change", this.render);
  },
  //similar to how we used our underscore templates. It is going to take the template we created on initialize and a model and make a compiled template.
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    if (this.model.get('is_complete')) {
      this.$el.addClass('is-complete');
    } else {
      this.$el.removeClass('is-complete');
    }
    return this;
  },
  events: {
    //event => click, select => button.delete (a button with class delete), function to call => deleteTask
    'click button.delete': 'deleteTask',
    'click button.toggle-complete': 'toggleComplete',

  },
  // all callbakcs for events include an event. You don't have to use it, but it is there if you need it.
  deleteTask: function(e) {
    this.model.destroy();
    this.remove();
  },
  // each instance of view has a model, so we can get the model from the view... this.model.
  toggleComplete: function(e) {
    this.model.set('is_complete', !this.model.get('is_complete'));
    console.log(this.model.get('is_complete'));
    // this.$el.toggleClass('is-complete');
    // this.$el.closest('.task').toggleClass('is-complete');
  }
});

export default TaskView;

// Backbone views come with several things.
// Initialize called immediately when the view is made
// el => This is the HTML DOM element that we will put the view in.  Use el to insert our view into the page when it is rendered.
// model => all views will be tied to a model. The moel provides the data for the view. Each view should have in general one model.
// render => function called when we want to draw the view onto the DOM. render will always want to return 'this'.
// $el => jquery selector of the el.

// Diff between el and $el =>
