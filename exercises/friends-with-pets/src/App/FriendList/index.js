import React, { Component } from "react";
import Friend from './Friend';
import './index.css';

function FriendList(props) {
    let friends = [  
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "Spot",
              breed: "Tabby"
            },{
              name: "John Johnson",
              breed: "Husky"
            },{
              name: "Bear the Bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepherd"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "Persian Cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "Fluffy",
              breed: "Sphynx Cat"
            },{
              name: "Patches",
              breed: "Sphynx Cat"
            },{
              name: "Tiger",
              breed: "Sphynx Cat"
            },{
              name: "Oscar",
              breed: "Sphynx Cat"
            }
          ]
        }
    ];
    return (
        <div className='friendlist-wrapper'>
            {friends.map((friend, index) => {
                return (
                    <Friend {...friend} key={index}></Friend>
                );
            })}
        </div>
    );
}

export default FriendList;