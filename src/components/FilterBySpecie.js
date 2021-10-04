function FilterBySpecie(props) {
    const handleSearchSpecie = (ev)=>{
        props.handleSearchSpecie(ev.target.value);
    }
   
    return (
      <div className="display">
        <label className="main__form--label" htmlFor="specie">
          Especie </label>
        <select
          className="main__form--input"
          name="specie"
          id="specie"
          value={props.searchSpecie}
          onChange={handleSearchSpecie}
        >
          <option value='all'>Todos</option>
          <option value='Human'>Humano</option>
          <option value='Alien'>Alien</option>
        </select>
      </div>
    );
  }
  
  export default FilterBySpecie;