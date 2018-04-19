angular.element('#tableid thead tr#filterrow th').each(function() {
    $(this).html('<input type="text"  size="11" />');
});

$("#tableid thead input").on('keyup change', function() {
    $scope.table
        .column($(this).parent().index() + ':visible')
        .search(this.value)
        .draw();
});


$scope.table = angular.element('#tableid').DataTable({
    "order": [
        [0, "desc"]
    ],
    "columnDefs": [

        {
            className: "text-right",
            "targets": [4, 5, 6],
        },
        {
            type: 'date-uk',
            targets: 0
        },
        {
            "targets": [11],
            "visible": false,
            "searchable": false
        },
        {
            "width": "2%",
            "targets": 0
        },
    ],
    "pagingType": "full_numbers",
    "dom": '<Bf><t><l><i><p>',
    "orderCellsTop": true,
    "iDisplayLength": 20,
    "language": {
        "info": "total records: _MAX_",
        "lengthMenu": "Display: _MENU_ ",
    }
})