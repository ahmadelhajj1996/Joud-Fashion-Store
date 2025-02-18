import Container from "../components/Container";
import Imagegrid from "../components/Imagegrid";
import { useParams } from "react-router-dom";
import { trending, featured , trendingWomen } from '../utils/constants'
import { useData } from "../hooks/useData";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const Classification = () => {

    const {language } = useSelector((state) => state.general);
    const { classificationId } = useParams();

    document.title =  ' Joud`s ' +  classificationId  

    const {data:classification , isFetching:classificationFetching , isFetched:classificationFetched} = useData('classifications' , {  
      select :  (data) => data?.data?.find(item => item.title['en'] == classificationId) , 
      staleTime : 24 * 60 * 60 * 1000
    })
    const fn = (data) => data?.data?.filter(item => item.classification_id == classification.id).map(item => {
      let url =  `${item.title['en']}`;
      return {
        ...item,
        link: decodeURIComponent(url),
      };
    }  )

    const {data:categories , isFetching:categoriesFetching , isFetched:categoriesFetched} = useData('categories' , {  
      select : fn , 
      staleTime : 24 * 60 * 60 * 1000
    })


  if(classificationFetched && categoriesFetched )  
  {
    return (
      <div >
 
        <div className="mx-[6%]">
        <Container>
          <h1 className="title">joud {classification.title[language]} collection</h1>
          <Imagegrid items={categories} columns={'grid-cols-10   gap-x-5 justify-center'}
            detailsClass={'ps-6 py-3'}
            imageCLass={'w-full h-28  rounded-full border-[1px] border-gray-500  '}
            details={{ title: true, price: false, description: false }}
          />
        </Container>

        <Container>
          <h1 className="title">trending now</h1>
          <Imagegrid items={trendingWomen} columns={'grid-cols-3   gap-x-1 justify-center'}
            detailsClass={'ps-6 py-0'}
            imageCLass={'w-full h-[500px]'}
            details={{ text: true }}
          />
          <div className="grid grid-cols-3 pt-1 ">
            <div className="relative col-span-2">
              <img src="https://www.next.co.uk/cms/resource/blob/823598/21bf66e87414433800f50843028d8793/seasons-womens-data.jpg" alt="" />
            </div>
          </div>
        </Container>

        <Container>
          <h1 className="title">SHOP BY TREND</h1>
          <Imagegrid items={trending} columns={'grid-cols-6 gap-x-1 justify-center'}
            detailsClass={'pt-3'}
            imageCLass={'w-full h-[250px]'}
            details={{ title: true, price: false, description: false }}
          />
        </Container>

        <Container>
          <h1 className="title">Featured</h1>
          <Imagegrid items={featured} columns={'grid-cols-3 gap-x-1 justify-center'}
            detailsClass={'pt-3'}
            imageCLass={'w-full h-[500px]'}
            details={{ title: true, description: true }}
          />
        </Container>



        <Container>
          <p className="paragraph">
            Discover all the latest trends to keep your style on point this season.
            Think everything from casual summer dresses to broderie tops, crochet details,
            coordinated sets and all the trending shorts and swimwear you need to achieve poolside perfection.
            Have an RSVP on your horizon? Our evening dresses, prom dresses and bridesmaid dresses are loaded with beautiful fabrics,
            trending colours and elevated details so your head-to-toe confidence can shine way past your best-dressed style.
            Explore the womens linen shop for wide leg trousers, linen dresses, linen tops and shorts and head out in the fabric of the moment.
            Pair yours with chunky sandals, corkbed mules or simple flip flops to complete the look.
            Dont forget to check out all we have to offer in women beauty, for a summer glow-up like no other. Shop the full range at JOUD. </p>
        </Container>

      </div>    
              {/*<Exploremore title={'DISCOVER BRANDS '} hasAction={true} btnText="show all brands" action={() => console.log('clicked successfully')} >
            <Imagegrid images={items4} columns={' grid-cols-3 gap-1  justify-center'} innerText={true} hasTitle={title} imageCLass={'w-full h-[500px]  object-cover'} />
          </Exploremore> */}
      </div>
    );
  }

};
export default Classification
