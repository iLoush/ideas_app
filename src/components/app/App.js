import React, { Component } from 'react';

import AppHeader from '../appHeader';
import Search from '../search';
import PostFilter from '../postFilter';
import PostList from '../postList';
import PostAdd from '../postAdd';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
   margin: 0 auto;
   max-width: 800px;
`

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               label: 'To learn React',
               important: true,
               like: true,
               id: 1
            },
            {
               label: 'To learn TypeScript',
               important: false,
               like: true,
               id: 2
            },
            {
               label: 'To find a job as front end developer',
               important: false,
               like: true,
               id: 3
            },
            {
               label: 'To find a house in NL',
               important: false,
               like: true,
               id: 4
            },
            {
               label: 'To buy MINI cooper cabrio',
               important: false,
               like: true,
               id: 5
            }
         ],
         term: '',
         filter: 'all'
      };
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onToggleLiked = this.onToggleLiked.bind(this);
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
      this.onFilterSelect = this.onFilterSelect.bind(this);

      this.maxId = 6;
   }

   deleteItem(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(element => element.id === id);

         const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

         return {
            data: newArr
         }
      });
   }

   addItem(body) {
      const newItem = {
         label: body,
         important: false,
         id: this.maxId++,
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   onToggleImportant(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(element => element.id === id);
         const old = data[index];
         const newItem = { ...old, important: !old.important };

         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

         return {
            data: newArr
         }
      });
   }

   onToggleLiked(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(element => element.id === id);
         const old = data[index];
         const newItem = { ...old, like: !old.like };

         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

         return {
            data: newArr
         }
      });
   }

   searchPost(items, term) {
      if (term.length === 0) {
         return items
      }

      return items.filter((item) => {
         return item.label.indexOf(term) > -1
      });
   }

   filterPosts(items, filter) {
      if (filter === 'like') {
         return items.filter(item => item.like)
      } else {
         return items
      }
   }

   onUpdateSearch(term) {
      this.setState({ term })
   }

   onFilterSelect(filter) {
      this.setState({ filter })
   }

   render() {
      const { data, term, filter } = this.state;

      const liked = data.filter(item => item.like).length;
      const allPosts = data.length;
      const filteredPosts = this.filterPosts(this.searchPost(data, term), filter);

      return (
         <AppBlock>
            <AppHeader
               liked={liked}
               allPosts={allPosts}
            />
            <div className="search-panel d-flex">
               <Search
                  onUpdateSearch={this.onUpdateSearch} />
               <PostFilter
                  filter={filter}
                  onFilterSelect={this.onFilterSelect} />
            </div>
            <PostList
               posts={filteredPosts}
               onDelete={this.deleteItem}
               onToggleImportant={this.onToggleImportant}
               onToggleLiked={this.onToggleLiked}
            />
            <PostAdd
               onAdd={this.addItem}
            />
         </AppBlock >
      )
   }
}