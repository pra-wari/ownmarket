<div class="main-content">

    <div class="container-fluid">
    <div class="alert alert-success" style="display:none;"></div>
    <div class="alert alert-warning" style="display:none;"></div>
        <div class="col-sm-5">
            <div class="profileImageUpload">
                <label for="profileImage">
                    <input type="file" name="profileImage" id="profileImage" accept="image/*" style="display:none;">
                    <img src="{{$user->google_picture_link}}" class="img-circle" accepted="image/*" id="photo">
                </label>
            </div>
          
        </div>
        <div class="col-sm-7">
            <div class="jumbotron user-detail">
                <h3>Name:&nbsp;{{$user->name}}</h3>
                <h3>Email:&nbsp;{{$user->email}}</h3>
                <h3>Mobile:&nbsp;{{$user->contact}}</h3>
            </div>
            <div class="edit-details user-detail">
                <input type="text" name="name" value="{{$user->name}}" class="form-control"><br/>
                <input type="email" value="{{$user->email}}" class="form-control" readonly><br/>
                <input type="number" name="number" value="{{$user->contact}}" class="form-control"><br/>
            </div>
            <div class="user-detail updatePassword">
                <input type="password" value="" name="current" placeholder="Current password" class="form-control"><br/>
                <input type="password" value="" name="new" placeholder = "New password" class="form-control"><br/>
                <input type="password" value="" name="confirm" placeholder = "Confirm password" class="form-control"><br/>

            </div>
            <button class="btn" id="edit">Edit</button>
            <button class="btn" id="change">Change Password</button>
        </div>
        <button class="btn updateBtn">Update</button>
    </div>
</div>