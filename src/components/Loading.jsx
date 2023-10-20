import { ThreeDots } from  'react-loader-spinner'
function Loading(){
    return(
        <div className='fetchContainer'> 
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#3C47E9" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
            <div className='fetch'>Fetching data</div>
        </div> 
    )
}
export default Loading