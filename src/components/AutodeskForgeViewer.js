import { useEffect, useState } from 'react';
import { initializeAutodeskForgeViewer } from './initializeAutodeskForgeViewer';


export const AutodeskForgeViewer = async () => {

    
    const urn ='YWRzay5vYmplY3RzOm9zLm9iamVjdDphdmZxcGF6bGt0MW0xMHBicWRjaHRwa3pwZWlxdGt3dy1pbXQvaW10XzAwXzAxLnJ2dA'
    
    // useEffect(() => {
    //   initializeAutodeskForgeViewer(urn)

    // }, []);

    initializeAutodeskForgeViewer(urn)


    return (
        <div>
            <div id='viewerContainer'></div>
        </div>
    )
}




// export const getStaticProps: GetStaticProps = async () => {
export const getStaticProps = async () => {


 





  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 *8, //each 8 hours, a new api call will be fetchedwhen a new person access the page! 3 times a day.
  }

}

