import { Helmet } from "react-helmet";
const About = () => {
    return (  
<>
        <Helmet>
            <title>About</title> 
        </Helmet>

     
        <div className="majita-mag">
        <h5>Welcome to Majita Mag</h5>
        <p>
            Majita Mag is a dynamic publication founded by a group of passionate young men
            dedicated to celebrating talented male creatives and advocating for mental health. 
            Originally designed as a platform to spotlight men’s artistic achievements and share authentic stories of resilience, 
            Majita Mag is committed to breaking down stereotypes. As we evolved into a fully inclusive publication, we continue to champion creativity and mental wellness, welcoming voices and perspectives from all genders.</p>
      
        <p>
            Majita Monday is our weekly feature, published every Monday, 
            where we interview male creatives about their artistic journeys and mental health. 
            Each week, we celebrate the resilience and vulnerability of men by sharing their stories of triumph, 
            challenge, and inspiration. This dedicated segment not only highlights their creative pursuits 
            but also fosters open conversations about mental wellbeing, encouraging a supportive community 
            that values both art and self-care.
        </p>
            <h5>Women Crush Wednesday</h5>
        <p>Women Crush Wednesday is our weekly feature, published every Wednesday, 
           where we spotlight inspiring female creatives who are truly "crushing it" in their fields. 
           In these interviews, we explore their artistic journeys, the challenges they've overcome, 
           and how they maintain their mental wellbeing in a demanding industry. Recognizing 
           that it can be especially challenging for women to have their voices heard in a male-dominated creative space, this segment is designed to serve as a safe haven for sharing authentic stories. We are committed to amplifying their voices, celebrating their resilience, and inspiring a more inclusive future where every creative story is valued.</p>
       <br/>
        <h5>Meet the Team</h5>

        <p>
            <strong>Tsheamo</strong>
            <br />Graphic Designer </p>
       
        <p>
            <strong>Corey</strong>
            <br />Head of Digital & Marketing </p>
        <p>
            <strong>Kimmo</strong>
            <br />Lead Creative & Photography </p>
           
        <p>
            <strong>Aggrey</strong>
            <br />Website & Technical Lead</p>
    </div>
    </>    
    
 );
}
 
export default About;