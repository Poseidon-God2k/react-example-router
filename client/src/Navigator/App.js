import React from 'react';
import '../App.css';
import './Home.css'
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from '../ItemDetail';
import Account from '../Account/Account';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id/" component={ItemDetail}/>
      <Route path="/account" component={Account}/>
      </Switch>
    </div>
    </Router>
  );
}

function Home(){
  let url = "http://localhost:3000/shop";
  let style_li_item = {
    visibility: 'visible',
    opacity: '1',
    transition: 'opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s',
  }
  return(
  
  <div className="index-segmented-body">
    <section className="album-results-free">
      <div className="container">
          <div className="row">
            <h2>Đang tìm kiếm nhạc?</h2>
            <p className="lead">Tiep tuc ban nhac da phat gan day tu doan ban dung</p>
            <a id="segmented-desktop-launch" className="btn btn-stroked-dark" role="button" href = {url} >Bat dau trinh phat tren web</a>
          </div>
          <div className="row">
            <div className="album-results">
              <ul>
                <li className="col-xs-12 col-sm-4" style={style_li_item} >
                  <figure onclick="location.href='https://open.spotify.com/album/2zbfishc70HpcgMu8ymtri';">
                    <div className="box">
                      <div className="content">
                          <img class="img-responsive" src="https://i.scdn.co/image/ab67616d0000b2733421e46ba95360d1a8792563" title="Freedom." alt="Freedom." onclick="location.href='https://open.spotify.com/album/1VDEosYeESOUFnySf8mxDJ';" />
                      </div>
                    </div>
                    <div class="hidden-xs content-overlay" onclick="location.href='https://open.spotify.com/album/1VDEosYeESOUFnySf8mxDJ';"></div>
                    <div class="hidden-xs content-details">
                      <figcaption class="album-play-button">
                        <h2 class="text-white">Freedom.</h2>
                        <h4 class="text-white">Justin Bieber</h4>
                        <div id="segmented-play-now" class="btn btn-link" data-link="https://open.spotify.com/album/1VDEosYeESOUFnySf8mxDJ" role="button">
                          <a href="https://open.spotify.com/album/1VDEosYeESOUFnySf8mxDJ" data-tracking="{&quot;category&quot;: &quot;home&quot;, &quot;action&quot;: &quot;click-music&quot;}" onclick="location.href='https://open.spotify.com/album/1VDEosYeESOUFnySf8mxDJ';">PHÁT NGAY</a>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </li>
              </ul>
            </div>
          </div>    
      </div>
    </section>
  </div>
  );
};
export default App;
