import React, { Component } from 'react'

export default class Quize extends Component {
    data=[
        ["实验二","./quize/实验2/2019211910019 林日升.zip"],
        ["实验三","./quize/实验3/2019211910019 林日升.zip"],
        ["实验四","./quize/实验4/2019211910019 林日升.zip"],
        ["实验五","./quize/实验5/2019211910019 林日升.zip"],
        ["实验六","./quize/实验6/2019211910019 林日升.zip"],
        ["实验七","./quize/实验6/2019211910019 林日升.zip"],
        ["实验八","./quize/实验8/2019211910019 林日升.zip"],
        ["实验九","./quize/实验8/2019211910019 林日升.zip"],
    ]
  render() {
    return (
      <div>
      {this.data.map((value,index)=>{
          return (
              <div key={index}>
                  <a href={value[1]}>{value[0]}</a>
              </div>
          )
      })}
      </div>
    )
  }
}
