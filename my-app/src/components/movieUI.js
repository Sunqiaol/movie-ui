// Example definition for Movieui component
import './movieUI.css'

export default function MovieUI({ title, year }) {
    return (
        <div className="Moviecard">
            <div>
                {title}
            </div>
            <div>
                {year}
            </div>
        </div>

    );
};
