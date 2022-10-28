import React from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid'
import $ from "jquery";
import "./styles.css";

class App extends React.Component {
  state = {
    hoverStyle: {},
    events: [
      {
        id: 1,
        start: "2018-12-10",
        end: "2018-12-15",
        title: "Event 01"
      }
    ]
  };
  addEvents = () => {
    let calendar = this.refs.test.calendar;
    //点击下一个月
    calendar.next();
    let view = calendar.view;
    //获取当前日历显示开始 - 结束
    let start = new Date(view.activeStart).toLocaleDateString();
    let end = new Date(view.activeEnd).toLocaleDateString();
    console.log(start);
    console.log(end);

    const newEvent = {
      id: 2,
      start: "2018-12-15",
      end: "2018-12-20",
      title: "Event 02"
    };
    this.setState({ events: this.state.events.concat(newEvent) });
  };

  componentDidMount() {
    // $(".fc-day").mouseenter( el => {
    //   console.log(el)
    //   let nodeEL = $(el)[0].currentTarget;
    //   el.stopPropagation()
    //   el.preventDefault()
    //   // self.setState({
    //   //   hoverStyle: {
    //   //     width: $(nodeEL).width() + "px",
    //   //     height: $(nodeEL).height() + "px",
    //   //     top: $(nodeEL).offset().top + "px",
    //   //     left: $(nodeEL).offset().left + "px"
    //   //   }
    //   // });
    //   $('.popver').css('width',  $(nodeEL).width() + "px")
    //   $('.popver').css('height',  $(nodeEL).height() + "px")
    //   $('.popver').css('top',  $(nodeEL).offset().top + "px")
    //   $('.popver').css('left',  $(nodeEL).offset().left + "px")

    // });
    $(".fc-day").mouseleave( el => {
      $('.popver').css('top',  '-999px')
      $('.popver').css('left',  '-999px')
    });
    $("button.fc-today-button").click(() => {
      console.log(222232323);
    });
    // let calendarApi = this.calendarRef.current
    // $("#ChannelCalendar")[0].current.getApi()
  }
  mountEvnt(calEvent, jsEvent, view){
    let nodeEL = $(view)[0].currentTarget;
    console.log( $(nodeEL).width(),1)
    // self.setState({
    //   hoverStyle: {
    //     width: $(nodeEL).width() + "px",
    //     height: $(nodeEL).height() + "px",
    //     top: $(nodeEL).offset().top + "px",
    //     left: $(nodeEL).offset().left + "px"
    //   }
    // });
    $('.popver').css('width',  $(nodeEL).width() + "px")
    $('.popver').css('height',  $(nodeEL).height() + "px")
    $('.popver').css('top',  $(nodeEL).offset().top + "px")
    $('.popver').css('left',  $(nodeEL).offset().left + "px")
  }
  render() {
    return (
      <div className="App">
        <div className="popver" style={this.state.hoverStyle} />
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          events={this.state.events}
          ref="test"
          id="ChannelCal"
          eventMouseEnter={this.mountEvnt}
           
        
        />
        <button onClick={this.addEvents}>Add More Events</button>

        <div>
          {this.state.events.map(event => (
            <div key={event.id}>
              {event.id} - {event.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { Component } from "react";
import { Calendar } from "fullcalendar";

export default class ChannelCalendar extends Component {
  componentDidMount() {
    const calendarEl = this.refs.fullCalendar;

    console.log("calendarHandler");
    let calendar = new Calendar(calendarEl, {
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      editable: true,
      droppable: true,
      selectable: true,
      events: this.props.events
    });
    calendar.render();
    calendar.changeView("month");
  }

  render() {
    return <div ref="fullCalendar" />;
  }
}
