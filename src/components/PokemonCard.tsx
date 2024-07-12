import { PokemonData } from "@/types";

const NewsCard = ({ pokemon }: { pokemon: PokemonData }) => {
  return (
    <div className="cursor-pointer shadow-2xl rounded-lg flex flex-col bg-primary">
      <img
        className="object-contain h-48 w-full rounded-t-lg"
        src={pokemon.sprites.front_default ?? pokemon.sprites.back_default}
        onError={(e) => {
          e.currentTarget.src = "/images/pokemon_placeholder.png";
        }}
        alt={pokemon.name}
      />
      <div className="p-4 flex-1 flex flex-col gap-4 bg-primary text-white rounded-lg">
        <h2 className="line-clamp-2 text-ellipsis text-lg font-medium">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <p className="text-sm">
          Height: {pokemon.height} | Base Experience: {pokemon.base_experience}
        </p>
        <p className="mt-auto self-end text-sm">Order: {pokemon.order}</p>
      </div>
    </div>
  );
};

export default NewsCard;
