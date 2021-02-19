import React from "react";
import AsideMenu from "../Home/asidemenu/AsideMenu";
import news from "../../data/news";
import NewsNav from "./NewsNav";
import { Route, Switch } from "react-router-dom";
import NewsList from "./NewsList";

const News = (props) => {

    return (
        <div>
            {
                props.isAuth ? <div className="my-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="login-form bg-light p-3 aside-menu">
                                <AsideMenu />
                            </div>
                        </div>
                        <div className="col-9 container">
                            <div className="product-list row container">
                                <NewsNav />
                            </div>
                            <div className="news-list">
                                <Switch>
                                    <Route path="/news/categories/:name/">
                                        <NewsList />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div> : <h1 className="text-center">NEED AUTHORIZE</h1>
            }
        </div>
    );
}
export default News;