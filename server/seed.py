# #!/usr/bin/env python3

from app import app
from models import db, Jewelry, Sellers

def run():
    # delete all rows from Jewelry and Sellers table
    Jewelry.query.delete()
    Sellers.query.delete()
    db.session.commit()

    # add sellers
    sellers = [
        Sellers(name='Tiffany&Co', location='New York, NY'), 
        Sellers(name='Van Cleef', location='New York, NY')
    ]
    db.session.add_all(sellers)
    db.session.commit()

    # add jewelry
    jewelries = [
        Jewelry(name='TiffanyT', metal='gold', type='necklace',
                seller_id=sellers[0].id, image='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-circle-pendant-70875799_1056243_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp', 
                price=3700.00),
        Jewelry(name='Elsa Peretti', metal='silver', type='ring',
                seller_id=sellers[0].id, image='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettisplit-ring-74143458_1072365_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp',
                price=750.00),
        Jewelry(name='Vintage Alhambra earrings', metal='gold', type='earrings',
                seller_id=sellers[1].id, image='https://www.vancleefarpels.com/content/dam/rcq/vca/_6/om/BI/NR/MU/CU/cu/Fg/v2/Yp/fw/_6omBINRMUCUcuFgv2Ypfw.png.transform.vca-w550-2x.png',
                price=4150.00),
        Jewelry(name='Perlee diamonds bracelet', metal='gold', type='bracelet',
                seller_id=sellers[1].id, image='https://www.vancleefarpels.com/content/dam/rcq/vca/nM/4M/id/Et/RK/CM/eh/9i/Sy/Ov/qA/nM4MidEtRKCMeh9iSyOvqA.png.transform.vca-w550-2x.png',
                price=32500.00)
    ]
    db.session.add_all(jewelries)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        run()