import React from 'react';

export default function PruductSerach() {
  return (
    <div>
      <h1>Products</h1>
      <FilterProduct products={PRODUCTS} />
    </div>
  );
}

class FilterProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '', inStockOnly: false };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }
  handleInStockOnlyChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }
  render() {
    return (
      <div className="products">
        <h2>Filter Products</h2>
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockOnlyChange}
          />
        </div>
        <div>
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockOnlyChange(e) {
    this.props.onInStockChange(!this.props.inStockOnly);
  }
  render() {
    return (
      <div>
        {/* <h3>Search bar</h3> */}
        <form action="">
          <input
            value={this.props.filterText}
            name="name"
            type="text"
            placeholder="Search..."
            onChange={this.handleFilterTextChange}
          />
          <label htmlFor="only">Only</label>
          <input
            checked={this.props.inStockOnly}
            onChange={this.handleInStockOnlyChange}
            name="only"
            type="checkbox"
          />
        </form>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const row = [];
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    let lastcat = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastcat) {
        row.push(
          <ProductCat category={product.category} key={product.category} />
        );
      }
      row.push(<ProductItems product={product} key={product.name} />);
      lastcat = product.category;
    });
    return (
      <div>
        {/* <h3>ProductTable</h3> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

class ProductCat extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductItems extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
/**
 * PruductSerach -- passes PRODUCTS
 *   -FilterProduct -- passes PRODUCTS
 *      - SearchBar ---
 *      - ProductTable --- passes
 *          -ProductCat -- recieve -- prdCat
 *          - ProductItems -- recieve -- prds
 *
 *
 */
const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },

  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
