
@extends('backEnd.includes.layout')
@section('content')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script type="text/javascript" src="{{URL::asset('js/dashboard.js')}}"></script>

<div class="animated fadeIn">
    
    <div class="clearfix"></div>
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h3>Dashboard</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- Orders -->
    <div class="orders">
        <div class="row">
            <div class="col-xl-8">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Activity Feeds</h4>
                    </div>
                    <div class="card-body--">
                        <div class="table-stats order-table ov-h">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th class="serial">#</th>
                                        <th class="avatar">Message</th>
                                        <th>Date & Time</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php $number = 0; ?>
                                  
                                    
                                </tbody>
                            </table>
                        </div> <!-- /.table-stats -->
                    </div>
                </div> <!-- /.card -->
            </div>  <!-- /.col-lg-8 -->
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title box-title">Preferences</h4>
                    
                    <div class="card-content">
                        <div class="messenger-box">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Open Clients:</td>
                                       
                                    </tr>
                                    <tr>
                                        <td>Clients taken this Month:</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Client Capacity:</td>
                                       
                                    </tr>
                                    <tr>
                                    <td>
                                        <input type="number" id="consultantCapacity">
                                    </td>
                                    <td>
                                        <button id="updateCapacity" value="{{$user->id}}">Update Capacity</button>
                                    </td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div><!-- /.messenger-box -->
                    </div>
                </div> <!-- /.card-body -->
                </div><!-- /.card -->
            </div> <!-- /.col-md-4 -->
            

            {{-- <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title box-title">Live Chat</h4>
                    <div class="card-content">
                        <div class="messenger-box">
                            <ul>
                                <li>
                                    <div class="msg-received msg-container">
                                        <div class="avatar">
                                            <img src="images/avatar/64-1.jpg" alt="">
                                            <div class="send-time">11.11 am</div>
                                        </div>
                                        <div class="msg-box">
                                            <div class="inner-box">
                                                <div class="name">
                                                    John Doe
                                                </div>
                                                <div class="meg">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /.msg-received -->
                                </li>
                                <li>
                                    <div class="msg-sent msg-container">
                                        <div class="avatar">
                                            <img src="images/avatar/64-2.jpg" alt="">
                                            <div class="send-time">11.11 am</div>
                                        </div>
                                        <div class="msg-box">
                                            <div class="inner-box">
                                                <div class="name">
                                                    John Doe
                                                </div>
                                                <div class="meg">
                                                    Hay how are you doing?
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /.msg-sent -->
                                </li>
                            </ul>
                            <div class="send-mgs">
                                <div class="yourmsg">
                                    <input class="form-control" type="text">
                                </div>
                                <button class="btn msg-send-btn">
                                    <i class="pe-7s-paper-plane"></i>
                                </button>
                            </div>
                        </div><!-- /.messenger-box -->
                    </div>
                    </div> <!-- /.card-body -->
                </div><!-- /.card -->
            </div> <!-- /.col-md-4 --> --}}
        </div>
    </div>
    <!-- /.orders -->
    
    <!-- Modal - Calendar - Add New Event -->
    <div class="modal fade none-border" id="event-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><strong>Add New Event</strong></h4>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
                    <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /#event-modal -->
    <!-- Modal - Calendar - Add Category -->
    <div class="modal fade none-border" id="add-category">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><strong>Add a category </strong></h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label">Category Name</label>
                                <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
                            </div>
                            <div class="col-md-6">
                                <label class="control-label">Choose Category Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="pink">Pink</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                </div>
            </div>
        </div>
    </div>
<!-- /#add-category -->
@extends('backEnd.includes.footer')
</div>
@stop
<!-- .animated -->
