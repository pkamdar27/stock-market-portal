import React from 'react';
import "./StockAnalysis.css";
import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function StockAnalysis(props) {
    console.log(props.StockHighlights);
    return (
        <div className="StockAnalysis">
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div"><h3>Stock Valuation</h3></div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">Analyst Rating</div>
                <div className="StockAnalysis--Row--value-div">
                    <ReactStars
                        value={props.AnalystRatings.Rating}
                        count={5}
                        size={25}
                        edit={false}
                        isHalf={false}
                        activeColor="#ffea00" />
                </div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">Market Capitalization (millions)</div>
                <div className="StockAnalysis--Row--value-div">{props.StockHighlights.MarketCapitalizationMln}M</div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">P/E Ratio</div>
                <div className="StockAnalysis--Row--value-div">{props.StockHighlights.PERatio}</div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">Earning Share</div>
                <div className="StockAnalysis--Row--value-div">{props.StockHighlights.EarningsShare}</div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">Revenue (TTM)</div>
                <div className="StockAnalysis--Row--value-div">{props.StockHighlights.RevenueTTM}</div>
            </div>
            <div className="StockAnalysis--Row--div">
                <div className="StockAnalysis--Row--Title-div">Gross Profit (TTM)</div>
                <div className="StockAnalysis--Row--value-div">{props.StockHighlights.GrossProfitTTM}</div>
            </div>
        </div>
    )
}