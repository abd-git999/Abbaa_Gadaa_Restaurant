import PlaceIcon from '@mui/icons-material/Place';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import SpaIcon from '@mui/icons-material/Spa';

   function More(){

return(

    <section className="more-banner">
     <div className="food-icons">
        <div className="SpaIcon-icon">
   <SpaIcon />  

     <h3>Fresh & Natural Ingredients</h3>
     <p>We use the best local ingredients.</p>
        </div>
     
     <div className="GroupsIcon-icon">

       <GroupsIcon />
     <h3>Oromo Hospitality</h3>
     <p>Feel at Home , always.</p>
     </div>
    
     <div className="RestaurantIcon-icon">

       <RestaurantIcon />

        <h3>Traditional Recipies</h3>
   <p>Taste the real Ethiopia.</p>
     </div>
     
     <div  className="PlaceIcon-icon">
<PlaceIcon /> 
       <h3>Located in Bulbula City </h3>
       <p>Vist Us and enjoy the experience.</p>
     </div>
     
     </div>

    </section>

);

   }

   export default More ;