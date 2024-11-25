import tablesetting from '../images/tablesetting.jpg'



function Ourmenu() {
    return (

        <section>
            <h1 className="ourmenu_heading">Our Menu</h1>

            <div className="s2">
                <div className="ourmenu">
                    <div>
                        <h3>Bread Basket</h3>
                        <p className="para_content">Assortment of fresh baked fruit breads and muffins 5.50</p></div>
                    <div>
                        <h3>Honey Almond Granola with Fruits</h3>
                        <p className="para_content">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p></div>
                    <div>
                        <h3>Belgian Waffle</h3>
                        <p className="para_content">Vanilla flavored batter with malted flour 7.50</p></div>
                    <div>
                        <h3>Scrambled eggs</h3>
                        <p className="para_content">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p></div>
                    <div>
                        <h3>Blueberry Pancakes</h3>
                        <p className="para_content">With syrup, butter and lots of berries 8.50</p>
                    </div>
                </div>



                <div className="ourmenu_img">
                    <img src={tablesetting} alt="img_3" className="tablesetting_img"></img>
                </div>
            </div>
            <hr className="hor_line">
            </hr>
        </section>


    )
}
export default Ourmenu