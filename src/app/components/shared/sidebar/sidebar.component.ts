import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.OcultarSidebar();
  }

  private OcultarSidebar(): void {
    $(document).ready(() => {
      $("#sidebarToggle, #sidebarToggleTop").on('click', function () {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    });
  }

}
