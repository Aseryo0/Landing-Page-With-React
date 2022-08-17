import sponsoredSeries from "../../../__Mocks__";
import { CardSection, ContenCard, SecondSection } from "./style";

export const SectionSecundary = () => {
    return (
        <SecondSection>
            <h2>Sponsored Series</h2>
            <CardSection>
                {sponsoredSeries.map((item) => (
                    <ContenCard key={item.id}>
                        <img src={item.image} />
                        <h2>{item.legend}</h2>
                        <p>{item.description}</p>
                    </ContenCard>
                ))}
            </CardSection>
        </SecondSection>
    );
};

export default SectionSecundary;
