<div class="main-content">
<script src="js/serviceProvider.js"></script>

<div class="alert alert-warning alert-dismissible" style="display:none;">

</div>
<div class="alert alert-success alert-dismissible" style="display:none;">

</div>

    <div class="row">
        <form method="post" id="uploadProductDetails" enctype="multipart/form-data">
        {{csrf_field()}}
            <div class="col-sm-6">
                <div class="productImageUpload">
                    <label for="productImage">
                        <input type="file" name="productImage" id="productImage" accept="image/*" style="display:none;">
                        <img src="images/uploadImage.png" class="img-rounded" id="photo">
                    </label>
                </div>
            </div>
            <div class="col-sm-6">
                
                <input type="text" name="product_name" placeholder="Product Name" class="form-control"><br/>
                <input type="text" name="product_brand" placeholder="Product Brand" class="form-control"><br/>
                <input type="text" name="quantity" placeholder="Qunatity" class="form-control"><br/>
                <input type="number" name="price" placeholder="Price of above quantity" class="form-control"><br/>
                <select name="category" id="category" class="form-control">
                    <option value="NULL">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="electricals">Electricals</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="men's accessories">Men's Accessories</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="women's accessories">Women's Accessories</option>
                    <option value="toys">Toy</option>
                    <option value="food">Food</option>
                    <option value="food">Other</option>
                </select><br/>
                <textarea name="description" placeholder="Write something about your product" class="form-control" rows="10"></textarea>
                <br/>
                <button type="submit" class="btn">Upload</button>
            </div>
        </form>    
    </div>
</div>